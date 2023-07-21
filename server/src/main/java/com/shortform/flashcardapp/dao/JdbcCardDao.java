package com.shortform.flashcardapp.dao;

import com.shortform.flashcardapp.model.Card;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcCardDao implements CardDao {

    private final JdbcTemplate jdbcTemplate;
    private final int LAST_BIN = 11;
    private final int MAX_TIMES_WRONG = 10;

    public JdbcCardDao(JdbcTemplate jdbcTemplate) {this.jdbcTemplate = jdbcTemplate;}

    @Override
    public Card getCard(int cardId) {
        Card card = new Card();
        String sql = "SELECT card_id, user_id, bin, expiry_timestamp_ms_epoch, question, answer, times_wrong " +
                "FROM card " +
                "WHERE card_id = ?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, cardId);
        if(result.next()) {
            card = mapRowtoCard(result);
        }
        return card;
    }

    @Override
    public List<Card> getAllActiveCardsByUserId(int userId) {
        List<Card> cardList = new ArrayList<>();
        String sql = "SELECT card_id, user_id, bin, expiry_timestamp_ms_epoch, question, answer, times_wrong " +
                "FROM card " +
                "WHERE user_id = ? " +
                "   AND bin < 11 " +
                "   AND times_wrong < 10" +
                "ORDER BY expiry_timestamp_ms_epoch;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, userId);
        while(result.next()) {
            cardList.add(mapRowtoCard(result));
        }
        return cardList;
    }

    @Override
    public List<Card> getAllInactiveCardsByUserId(int userId) {
        List<Card> cardList = new ArrayList<>();
        String sql = "SELECT card_id, user_id, bin, expiry_timestamp_ms_epoch, question, answer, times_wrong " +
                "FROM card " +
                "WHERE user_id = ? " +
                "   AND (bin = 11 " +
                "   OR times_wrong = 10) " +
                "ORDER BY expiry_timestamp_ms_epoch;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, userId);
        while(result.next()) {
            cardList.add(mapRowtoCard(result));
        }
        return cardList;
    }

    @Override
    public int numberOfActiveCardsByUserId(int userId) {
        int activeCards = 0;
        String sql = "SELECT COUNT(*) " +
                "FROM card " +
                "WHERE bin < ?;";
        activeCards = jdbcTemplate.queryForObject(
                sql,
                Integer.class,
                LAST_BIN);
        return activeCards;
    }

    @Override
    public Card getNextCardForUser(int userId) {
        Card card = null;
        String sql = "SELECT card_id, user_id, bin, expiry_timestamp_ms_epoch, question, answer, times_wrong " +
                "FROM card " +
                "WHERE user_id = ? " +
                "   AND expiry_timestamp_ms_epoch < ? " +
                "   AND bin < ? " +
                "   AND times_wrong < ?" +
                "ORDER BY bin DESC, expiry_timestamp_ms_epoch ASC " +
                "LIMIT 1;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(
                sql,
                userId,
                Instant.now().toEpochMilli(),
                LAST_BIN,
                MAX_TIMES_WRONG);
        if(result.next()) {
            card = mapRowtoCard(result);
        }
        return card;
    }

    @Override
    public Card createCard(Card card) {

        String sql = ("INSERT INTO card (user_id, bin, expiry_timestamp_ms_epoch, question, answer, times_wrong) " +
                "VALUES (?, ?, ?, ?, ?, ?) returning card_id;");

        int cardId = jdbcTemplate.queryForObject(sql, Integer.class,
                card.getUserId(),
                card.getBin(),
                card.getExpiryTime().toEpochMilli(),
                card.getQuestion(),
                card.getAnswer(),
                card.getTimesWrong());
        return getCard(cardId);
    }

    @Override
    public boolean updateCard(Card card) {
        String sql = "UPDATE card SET card_id = ?, user_id = ?, bin = ?, expiry_timestamp_ms_epoch = ?, question = ?, answer = ?, times_wrong = ? " +
                "WHERE card_id = ?;";

        return jdbcTemplate.update(
                sql,
                card.getCardId(),
                card.getUserId(),
                card.getBin(),
                card.getExpiryTime().toEpochMilli(),
                card.getQuestion(),
                card.getAnswer(),
                card.getTimesWrong(),
                card.getCardId()) > 0;
    }

    @Override
    public boolean deleteCardById(int id) {
        String sql = "DELETE FROM card WHERE card_id = ?;";
        return jdbcTemplate.update(sql, id) > 0;
    }

    private Card mapRowtoCard(SqlRowSet result) {
        Card card = new Card();

        card.setCardId(result.getInt("card_id"));
        card.setUserId(result.getInt("user_id"));
        card.setBin(result.getInt("bin"));
        try {
            card.setExpiryTime(Instant.ofEpochMilli(result.getLong("expiry_timestamp_ms_epoch")));
        } catch (Exception e) {
            System.out.println("No timestamp present");
        }
        card.setQuestion(result.getString("question"));
        card.setAnswer(result.getString("answer"));
        card.setTimesWrong(result.getInt("times_wrong"));

        return card;
    }

}

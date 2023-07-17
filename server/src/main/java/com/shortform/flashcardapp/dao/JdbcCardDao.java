package com.shortform.flashcardapp.dao;

import com.shortform.flashcardapp.model.Card;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcCardDao implements CardDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcCardDao(JdbcTemplate jdbcTemplate) {this.jdbcTemplate = jdbcTemplate;}

    @Override
    public Card getCard(int cardId) {
        Card card = new Card();
        String sql = "SELECT card_id, user_id, bin, expiry_time, question, answer, times_wrong " +
                "FROM card " +
                "WHERE card_id = ?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, cardId);
        if(result.next()) {
            card = mapRowtoCard(result);
        }
        return card;
    }

    @Override
    public List<Card> getAllCardsByUserId(int userId) {
        List<Card> cardList = new ArrayList<>();
        String sql = "SELECT card_id, user_id, bin, expiry_time, question, answer, times_wrong " +
                "FROM card " +
                "WHERE user_id = ?;";
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, userId);
        while(result.next()) {
            cardList.add(mapRowtoCard(result));
        }
        return cardList;
    }

    @Override
    public Card createCard(Card card) {

        String sql = ("INSERT INTO card (user_id, bin, expiry_time, question, answer, times_wrong) " +
                "VALUES (?, ?, ?, ?, ?, ?) returning card_id;");
        int cardId = jdbcTemplate.queryForObject(sql, Integer.class,
                card.getUserId(),
                card.getBin(),
                Timestamp.valueOf(card.getExpiryTime()),
                card.getQuestion(),
                card.getAnswer(),
                card.getTimesWrong());
        return getCard(cardId);
    }

    private Card mapRowtoCard(SqlRowSet result) {
        Card card = new Card();

        card.setCardId(result.getInt("card_id"));
        card.setUserId(result.getInt("user_id"));
        card.setBin(result.getInt("bin"));
        card.setExpiryTime(result.getTimestamp("expiry_time").toLocalDateTime());
        card.setQuestion(result.getString("question"));
        card.setAnswer(result.getString("answer"));
        card.setTimesWrong(result.getInt("times_wrong"));

        return card;
    }

}
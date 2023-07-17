package com.shortform.flashcardapp.service;

import com.shortform.flashcardapp.dao.CardDao;
import com.shortform.flashcardapp.model.Card;
import com.shortform.flashcardapp.model.Message;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;


@Component
public class CardService {

    private CardDao cardDao;
    private final int LAST_BIN = 11;
    private final int LAST_MISTAKE = 10;
    private final int FIVE_SECONDS = 5;
    private final int TWENTY_FIVE_SECONDS = 25;
    private final int TWO_MINUTES = 60 * 2;
    private final int TEN_MINUTES = 60 * 10;
    private final int ONE_HOUR = 60 * 60;
    private final int FIVE_HOURS = ONE_HOUR * 5;
    private final int ONE_DAY = ONE_HOUR * 24;
    private final int FIVE_DAYS = ONE_DAY * 5;
    private final int TWENTY_FIVE_DAYS = ONE_DAY * 25;
    private final int FOUR_MONTHS = 4;

    public CardService(CardDao cardDao) {
        this.cardDao = cardDao;
    }

    public Card getCardById(int cardId) {
        return cardDao.getCard(cardId);
    }

    public List<Card> getAllCardsByUserId(int userId) {
        return cardDao.getAllCardsByUserId(userId);
    }

    public Message getStatusMessage(int userId) {

        if (cardDao.numberOfActiveCardsByUserId(userId) > 0) {
            if (getNextCardForUser(userId).equals(null)) {
                return new Message("You are all done for now.");
            } else {
                //return new Message("Test message"); //for testing
                return null;
            }
        } else {
            return new Message("You are permanently done.");
        }
    }

    public Card getNextCardForUser(int userId) {
        return cardDao.getNextCardForUser(userId);
    }

    public Card createCard(Card card) {
        card.setUserId(1);
        card.setBin(0);
        card.setExpiryTime(LocalDateTime.now());
        card.setTimesWrong(0);
        return cardDao.createCard(card);
    }

    public boolean logCorrectCard(int cardId) {
        Card card = cardDao.getCard(cardId);
        card.setBin(card.getBin() + 1);
        LocalDateTime now = LocalDateTime.now();

        switch (card.getBin()) {
            case 1:
                card.setExpiryTime(now.plusSeconds(5));
                break;
            case 2:
                card.setExpiryTime(now.plusSeconds(25));
                break;
            case 3:
                card.setExpiryTime(now.plusMinutes(2));
                break;
            case 4:
                card.setExpiryTime(now.plusMinutes(10));
                break;
            case 5:
                card.setExpiryTime(now.plusHours(1));
                break;
            case 6:
                card.setExpiryTime(now.plusHours(5));
                break;
            case 7:
                card.setExpiryTime(now.plusDays(1));
                break;
            case 8:
                card.setExpiryTime(now.plusDays(5));
                break;
            case 9:
                card.setExpiryTime(now.plusDays(25));
                break;
            case 10:
                card.setExpiryTime(now.plusMonths(4));
                break;
            case 11:
                card.setExpiryTime(null);

        }

        return cardDao.updateCard(card);
    }
}





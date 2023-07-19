package com.shortform.flashcardapp.service;

import com.shortform.flashcardapp.dao.CardDao;
import com.shortform.flashcardapp.model.Card;
import com.shortform.flashcardapp.model.Message;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;


@Component
public class CardService {

    private CardDao cardDao;

    public CardService(CardDao cardDao) {
        this.cardDao = cardDao;
    }

    public Card getCardById(int cardId) {
        return cardDao.getCard(cardId);
    }

    public List<Card> getAllActiveCardsByUserId(int userId) {
        return cardDao.getAllActiveCardsByUserId(userId);
    }

    public List<Card> getAllInactiveCardsByUserId(int userId) {
        return cardDao.getAllInactiveCardsByUserId(userId);
    }

    public Message getStatusMessage(int userId) {

        if (cardDao.numberOfActiveCardsByUserId(userId) > 0) {
            if (getNextCardForUser(userId) == null) {
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

    public Card createCard(Card card) { return cardDao.createCard(card); }

    public boolean logCorrectCard(Card card) {

        card.setBin(card.getBin() + 1);
        Instant now = card.getExpiryTime();

        switch (card.getBin()) {
            case 1:
                card.setExpiryTime(now.plusSeconds(5));
                break;
            case 2:
                card.setExpiryTime(now.plusSeconds(25));
                break;
            case 3:
                card.setExpiryTime(now.plus(2, ChronoUnit.MINUTES));
                break;
            case 4:
                card.setExpiryTime(now.plus(10, ChronoUnit.MINUTES));
                break;
            case 5:
                card.setExpiryTime(now.plus(1, ChronoUnit.HOURS));
                break;
            case 6:
                card.setExpiryTime(now.plus(5, ChronoUnit.HOURS));
                break;
            case 7:
                card.setExpiryTime(now.plus(1, ChronoUnit.DAYS));
                break;
            case 8:
                card.setExpiryTime(now.plus(5, ChronoUnit.DAYS));
                break;
            case 9:
                card.setExpiryTime(now.plus(25, ChronoUnit.DAYS));
                break;
            case 10:
                card.setExpiryTime(now.plus(4 * 30, ChronoUnit.DAYS));
                break;

        }

        return cardDao.updateCard(card);
    }

    public boolean logIncorrectCard(Card card) {
        card.setBin(1);
        card.setExpiryTime(card.getExpiryTime().plusSeconds(5));
        card.setTimesWrong(card.getTimesWrong()+1);
        return cardDao.updateCard(card);
    }
}





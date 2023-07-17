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

    public CardService (CardDao cardDao) {this.cardDao=cardDao;}

    public Card getCardById(int cardId) {return cardDao.getCard(cardId);}

    public List<Card> getAllCardsByUserId(int userId) {return cardDao.getAllCardsByUserId(userId);}

    public Message getStatusMessage(int userId) {

        if(cardDao.numberOfActiveCardsByUserId(userId) > 0){
            if(getNextCardForUser(userId).equals(null)) {
                return new Message("You are all done for now.");
            } else {
                return null;
            }
        } else {
            return new Message("You are permanently done.");
        }
    }

    public Card getNextCardForUser(int userId) {return cardDao.getNextCardForUser(userId);}

    public Card createCard(Card card) {
        card.setUserId(1);
        card.setBin(0);
        card.setExpiryTime(LocalDateTime.now());
        card.setTimesWrong(0);
        return cardDao.createCard(card);
    }



}

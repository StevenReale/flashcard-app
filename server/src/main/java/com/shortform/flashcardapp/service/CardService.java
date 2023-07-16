package com.shortform.flashcardapp.service;

import com.shortform.flashcardapp.dao.CardDao;
import com.shortform.flashcardapp.model.Card;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Component
public class CardService {

    private CardDao cardDao;

    public CardService (CardDao cardDao) {this.cardDao=cardDao;}

    public Card getCardById(int id) {return cardDao.getCard(id);}

    public Card createCard(Card card) {
        card.setUserId(1);
        card.setBin(0);
        card.setExpiryTime(LocalDateTime.now());
        card.setTimesWrong(0);
        return cardDao.createCard(card);
    }

}

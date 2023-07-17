package com.shortform.flashcardapp.dao;

import com.shortform.flashcardapp.model.Card;

import java.util.List;

public interface CardDao {

    public Card getCard(int cardId);

    public List<Card> getAllCardsByUserId(int userId);

    public Card createCard(Card card);

}

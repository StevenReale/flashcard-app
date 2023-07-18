package com.shortform.flashcardapp.dao;

import com.shortform.flashcardapp.model.Card;

import java.util.List;

public interface CardDao {

    public Card getCard(int cardId);

    public List<Card> getAllActiveCardsByUserId(int userId);

    public List<Card> getAllInactiveCardsByUserId(int userId);

    public int numberOfActiveCardsByUserId(int userId);

    public Card getNextCardForUser(int userId);

    public Card createCard(Card card);

    public boolean updateCard(Card card);

}

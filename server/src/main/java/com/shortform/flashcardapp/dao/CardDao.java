package com.shortform.flashcardapp.dao;

import com.shortform.flashcardapp.model.Card;

public interface CardDao {

    public Card getCard(int id);

    public Card createCard(Card card);

}

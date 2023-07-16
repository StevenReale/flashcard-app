package com.shortform.flashcardapp.model;

import java.time.LocalDateTime;

public class Card {

    private int cardId;
    private int userId;
    private int bin;
    private LocalDateTime expiryTime;
    private String question;
    private String answer;
    private int timesWrong;

    public Card() {}

    public Card(int userId, String question, String answer) {
        this.userId = userId;
        this.question = question;
        this.answer = answer;
    }

    public int getCardId() {
        return cardId;
    }

    public void setCardId(int cardId) {
        this.cardId = cardId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getBin() {
        return bin;
    }

    public void setBin(int bin) {
        this.bin = bin;
    }

    public LocalDateTime getExpiryTime() {
        return expiryTime;
    }

    public void setExpiryTime(LocalDateTime expiryTime) {
        this.expiryTime = expiryTime;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getTimesWrong() {
        return timesWrong;
    }

    public void setTimesWrong(int timesWrong) {
        this.timesWrong = timesWrong;
    }
}

package com.shortform.flashcardapp.model;

public class Message {

    private String status;

    public Message (String message) {
        this.status = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

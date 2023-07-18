package com.shortform.flashcardapp.controller;

import com.shortform.flashcardapp.model.Card;
import com.shortform.flashcardapp.model.Message;
import com.shortform.flashcardapp.service.CardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping( path = "/api/card")
public class CardController {

    private CardService cardService;

    public CardController(CardService cardService) {this.cardService = cardService;}

    @RequestMapping(method = RequestMethod.POST)
    public Card createCard(@RequestBody Card card) {
        return cardService.createCard(card);
    }

    @RequestMapping(path = "/active/{userId}", method = RequestMethod.GET)
    public List<Card> getAllActiveCardsByUserId(@PathVariable int userId) {
        return cardService.getAllActiveCardsByUserId(userId);
    }

    @RequestMapping(path = "/inactive/{userId}", method = RequestMethod.GET)
    public List<Card> getAllInactiveCardsByUserId(@PathVariable int userId) {
        return cardService.getAllInactiveCardsByUserId(userId);
    }

    @RequestMapping(path = "next/{userId}/checkStatus", method = RequestMethod.GET)
    public Message getStatusOfDeck(@PathVariable int userId){
        return cardService.getStatusMessage(userId);
    }

    @RequestMapping(path = "next/{userId}", method = RequestMethod.GET)
    public Card getNextCard(@PathVariable int userId) {
        return cardService.getNextCardForUser(userId);
    }

    @RequestMapping(path = "{cardId}/correct", method = RequestMethod.PUT)
    public boolean logCorrect(@PathVariable int cardId) {
        return cardService.logCorrectCard(cardId);
    }

    @RequestMapping(path = "{cardId}/incorrect", method = RequestMethod.PUT)
    public boolean logIncorrect(@PathVariable int cardId) {
        return cardService.logIncorrectCard(cardId);
    }


}

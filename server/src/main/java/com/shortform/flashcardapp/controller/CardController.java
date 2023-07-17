package com.shortform.flashcardapp.controller;

import com.shortform.flashcardapp.model.Card;
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

    @RequestMapping(path = "{userId}", method = RequestMethod.GET)
    public List<Card> getAllCardsByUserId(@PathVariable int userId) {
        return cardService.getAllCardsByUserId(userId);
    }


}

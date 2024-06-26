package com.shortform.flashcardapp.controller;

import com.shortform.flashcardapp.dao.JdbcUserDao;
import com.shortform.flashcardapp.dao.UserDao;
import com.shortform.flashcardapp.exception.AuthenticationException;
import com.shortform.flashcardapp.model.Card;
import com.shortform.flashcardapp.model.Message;
import com.shortform.flashcardapp.model.User;
import com.shortform.flashcardapp.service.CardService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@PreAuthorize("isAuthenticated()")
@CrossOrigin
@RequestMapping( path = "/api/card")
public class CardController {

    private CardService cardService;
    private UserDao userDao;

    public CardController(CardService cardService, UserDao userDao) {
        this.cardService = cardService;
        this.userDao = userDao;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Card createCard(@RequestBody Card card) {
        return cardService.createCard(card);
    }

    @RequestMapping(path = "/{cardId}", method = RequestMethod.DELETE)
    public boolean deleteCard(@PathVariable int cardId) {
        return cardService.deleteCardById(cardId);
    }

    @RequestMapping(path = "/{cardId}", method = RequestMethod.GET)
    public Card getCardById(@PathVariable int cardId) {
        return cardService.getCardById(cardId);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public boolean updateCard(@RequestBody Card card) {
        return cardService.updateCard(card);
    }

    @RequestMapping(path = "/active/{userId}", method = RequestMethod.GET)
    public List<Card> getAllActiveCardsByUserId(@PathVariable int userId, Principal principal) throws AuthenticationException {
        User user = getUser(principal);
        if (user.getUserId()!=userId){
            throw new AuthenticationException("Invalid user");
        }

        return cardService.getAllActiveCardsByUserId(userId);
    }

    @RequestMapping(path = "/inactive/{userId}", method = RequestMethod.GET)
    public List<Card> getAllInactiveCardsByUserId(@PathVariable int userId, Principal principal) throws AuthenticationException {
        User user = getUser(principal);
        if (user.getUserId()!=userId){
            throw new AuthenticationException("Invalid user");
        }
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

    @RequestMapping(path = "/correct", method = RequestMethod.PUT)
    public boolean logCorrect(@RequestBody Card card) {
        return cardService.logCorrectCard(card);
    }

    @RequestMapping(path = "/incorrect", method = RequestMethod.PUT)
    public boolean logIncorrect(@RequestBody Card card) {
        return cardService.logIncorrectCard(card);
    }

    private User getUser(Principal principal) {

        return userDao.getByUsername(principal.getName());
    }
}

import axios from "axios"
import timeServ from "./TimeService.js"


export default {

    addCard(card) {
        return axios.post('/card', card);
    },

    deleteCard(card) {
        return axios.delete(`/card/${card.cardId}`);
    },

    updateCard(card) {
        return axios.put('/card', card);
    },

    getCardById(cardId) {
        return axios.get(`card/${cardId}`);
    },

    getAllActiveCardsByUser() {
        return axios.get('/card/active/1');
    },

    getAllInactiveCardsByUser() {
        return axios.get('/card/inactive/1');
    },

    getNextCard() {
        return axios.get('/card/next/1');
    },

    checkCardStatus() {
        return axios.get('/card/next/1/checkStatus');
    },

    log(wasCorrect, card) {
       
        if (wasCorrect) {
            return axios.put(`/card/correct`, card);
        } else {
            return axios.put(`/card/incorrect`, card);
        }

    },

    //local methods
    getSortedActiveCards(cards) {
        return cards
            .filter(element => element.bin < 11 && element.timesWrong < 10)
            .sort((a,b) => {
             if (
                (
                new Date(a.expiryTime) - new Date(timeServ.nowUTC().toISOString()) > 0 || 
                new Date(b.expiryTime) - new Date(timeServ.nowUTC().toISOString()) > 0
                ) &&
                ( a != b )
            ) {
                return new Date (a.expiryTime) - new Date(b.expiryTime);
            } else {
                return b.bin - a.bin;
            }
            });
    },



}
import axios from "axios"


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
    }

}
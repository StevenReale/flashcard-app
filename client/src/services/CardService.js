import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:9000/api"
})

export default {

    addCard(card) {
        return http.post('/card', card);
    },

    getAllActiveCardsByUser() {
        return http.get('/card/active/1');
    },

    getAllInactiveCardsByUser() {
        return http.get('/card/inactive/1');
    },

    getNextCard() {
        return http.get('/card/next/1');
    },

    checkCardStatus() {
        return http.get('/card/next/1/checkStatus');
    },

    log(wasCorrect, cardId) {

        console.log(cardId);
        if (wasCorrect) {
            return http.put(`/card/${cardId}/correct`);
        } else {
            return http.put(`/card/${cardId}/incorrect`);
        }
    }

}
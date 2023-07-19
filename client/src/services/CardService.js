import axios from "axios"

const http = axios.create({
    baseURL: "https://tan-squirrel-production.up.railway.app/api"
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

    log(wasCorrect, card) {

        if (wasCorrect) {
            return http.put(`/card/correct`, card);
        } else {
            return http.put(`/card/incorrect`, card);
        }
    }

}
import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:9000/api"
})

export default {

    addCard(card) {
        return http.post('/card', card);
    },

    getAllCardsByUser() {
        return http.get('/card/1');
    }
}
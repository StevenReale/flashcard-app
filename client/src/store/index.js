import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if (currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    cards: [
      {
          "cardId": 19,
          "userId": 1,
          "bin": 4,
          "expiryTime": "2023-08-14T07:49:30.664Z",
          "question": "In C#, which attribute indicates that a particular class is used for unit testing?",
          "answer": "[TestClass]",
          "timesWrong": 0
      },
      {
          "cardId": 12,
          "userId": 1,
          "bin": 9,
          "expiryTime": "2023-08-14T13:06:44.812Z",
          "question": "This keyword (not \"public\") allows properties and methods to be accessed by other packages.",
          "answer": "protected",
          "timesWrong": 0
      },
      {
          "cardId": 18,
          "userId": 1,
          "bin": 7,
          "expiryTime": "2023-08-15T07:33:53.047Z",
          "question": "What Spring Boot annotation allows a controller to accept CORS requests?",
          "answer": "@CrossOrigin",
          "timesWrong": 1
      },
      {
          "cardId": 8,
          "userId": 1,
          "bin": 9,
          "expiryTime": "2023-08-30T19:18:40.558Z",
          "question": "What are the three pillars of object-oriented programming?",
          "answer": "Encapsulation, Polymorphism, and Inheritance",
          "timesWrong": 1
      },
      {
          "cardId": 9,
          "userId": 1,
          "bin": 9,
          "expiryTime": "2023-08-30T19:18:42.269Z",
          "question": "The acronym JSON stands for:",
          "answer": "JavaScript Object Notation",
          "timesWrong": 0
      },
      {
          "cardId": 14,
          "userId": 1,
          "bin": 9,
          "expiryTime": "2023-08-30T19:18:44.710Z",
          "question": "This JavaScript keyword prevents a variable from being reassigned.",
          "answer": "const",
          "timesWrong": 0
      },
      {
          "cardId": 11,
          "userId": 1,
          "bin": 10,
          "expiryTime": "2023-11-17T13:06:15.603Z",
          "question": "In SQL, the default parameter for an ORDER BY clause is:",
          "answer": "ASC",
          "timesWrong": 0
      },
      {
          "cardId": 16,
          "userId": 1,
          "bin": 10,
          "expiryTime": "2023-12-09T19:30:58.252Z",
          "question": "In the declaration List<Integer> myList = new ArrayList<>(), _____ is a class that implements the interface _____.",
          "answer": "ArrayList ... List",
          "timesWrong": 0
      },
      {
          "cardId": 10,
          "userId": 1,
          "bin": 11,
          "expiryTime": "2023-07-20T13:05:40.862Z",
          "question": "This block of code will always run after a try{} or catch{} block.",
          "answer": "finally{}",
          "timesWrong": 0
      },
      {
          "cardId": 5,
          "userId": 1,
          "bin": 2,
          "expiryTime": "2023-07-21T01:42:59.905Z",
          "question": "What is the average windspeed velocity of an unladen swallow?",
          "answer": "African or European?",
          "timesWrong": 10
      },
      {
          "cardId": 13,
          "userId": 1,
          "bin": 1,
          "expiryTime": "2023-08-11T19:31:32.530Z",
          "question": "This Java keyword prevents a variable from being reassigned.",
          "answer": "final",
          "timesWrong": 10
      }
  
  ]
  },
  mutations: {
    DELETE_CARD(state, cardId) {
      state.cards = state.cards.filter(element => element.cardId != cardId);
    },
    ADD_CARD(state, card) {
      card.cardId = 1 + state.cards.reduce((max, current) => {
        return current.cardId > max ? current.cardId : max;
      }, state.cards[0].cardId);

      state.cards.push(card);
    },
    EDIT_CARD(state, card) {
      state.cards.forEach(element => {
        if (element.cardId==card.cardId) {
          element = card;
          return;
        }
      });
    },
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    }
  },
  actions: {
  },
  modules: {
  }
})

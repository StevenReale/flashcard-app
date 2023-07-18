<template>
  <div>
    <div id="active">
      <h2>Active Flashcards</h2>
      <table>
        <thead>
          <tr>
            <th>Card Id</th>
            <th>Bin</th>
            <th>Times incorrect</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Becomes active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="card in cards" :key="card.cardId">
            <td id="card-id">{{ card.cardId }}</td>
            <td id="bin">{{ card.bin }}</td>
            <td id="incorrect">{{ card.timesWrong }}</td>
            <td id="question">{{ card.question }}</td>
            <td id="answer">{{ card.answer }}</td>
            <td id="time-stamp">{{ formatTimestamp(card.expiryTime) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="inactive">
      <h2>Inactive Flashcards</h2>
            <table>
        <thead>
          <tr>
            <th>Card Id</th>
            <th>Bin</th>
            <th>Times incorrect</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="card in inactiveCards" :key="card.cardId">
            <td id="card-id">{{ card.cardId }}</td>
            <td id="bin">{{ card.bin }}</td>
            <td id="incorrect">{{ card.timesWrong }}</td>
            <td id="question">{{ card.question }}</td>
            <td id="answer">{{ card.answer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cardServ from "../services/CardService";

export default {
  name: "flashcard-collection",
  data() {
    return {
      cards: [],
      inactiveCards: []
    };
  },
  created() {
    cardServ.getAllActiveCardsByUser().then((response) => {
      this.cards = response.data;
    });

    cardServ.getAllInactiveCardsByUser().then((response) => {
      this.inactiveCards = response.data;
    });
  },
  methods: {
    formatTimestamp(timeStamp) {
      const thisDate = new Date(timeStamp);

      if (timeStamp == null) {
        return "N/A";
      } else {
        return this.remainingTime(this.getTimeDifference(thisDate));
      }
    },

    getTimeDifference(date) {
      const currentDate = new Date(); // Get the current date/time
      const difference = date.getTime() - currentDate.getTime(); // Calculate the difference in milliseconds

      // Convert the difference to the desired units (e.g., seconds, minutes, hours, etc.)
      const seconds = Math.floor(difference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      // Return an object with the difference in various units
      return {
        milliseconds: difference,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days,
      };
    },

    remainingTime(time) {
      console.log(time);
      if (time.days > 0) {
        return time.days + " days";
      } else if (time.hours > 0) {
        return time.hours + " hours";
      } else if (time.minutes > 0) {
        return time.minutes + " minutes";
      } else if (time.seconds > 0) {
        return time.seconds + " seconds";
      } else {
        return "Now";
      }
    },
  },
};
</script>

<style>
th {
  font-weight: bold;
  padding-right: 1em;
  text-align: center;
}

td {
  padding-right: 1em;
}

thead {
  border-bottom: 1px solid black;
}

tbody td {
  padding-top: 0.5em;
}

#card-id,
#bin,
#time-stamp,
#incorrect {
  text-align: center;
}

#inactive {
  margin-top: 2em;
}
</style>
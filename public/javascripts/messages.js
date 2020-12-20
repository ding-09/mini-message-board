const moment = require('moment');
let date = moment().startOf('hour').fromNow();

// default messages shown in index
const messages = [
  {
    title: 'Blaze Pizza',
    description:
      'I just tried Blaze Pizza for the first time and I love it! What is everybody’s go-to order at Blaze?',
    username: 'Laurie',
    date: date,
  },
  {
    title: 'On the topic of pizzas',
    description:
      "I personally think Pizza Hut beats Blaze Pizza, but each to their own... I also dig Hungry Howie’s and their wings. Dominoes is alright. Papa John’s if I’m really desperate.",
    username: 'Armando',
    date: date,
  },
];

module.exports = messages;

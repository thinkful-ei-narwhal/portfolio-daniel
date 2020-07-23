const projects = [
  {
    id: cuid(),
    title: 'Quiz App',
    desc: 'An early project we completed in Thinkful\'s EI program, we had to create a quiz app from scratch using jQuery! We decided to have a quiz based on anime, and make it as fun as we could!  We built it for a Thinkful project, and decided on Anime because, like I said, it was fun!',
    picture: 'https://imgur.com/zZhoPU2.png',
    tech: ['HTML5', 'CSS', 'JavaScript', 'jQuery'],
    repo: 'https://github.com/thinkful-ei-narwhal/quiz-app-boilerplate-chadwick-daniel',
    live: 'https://thinkful-ei-narwhal.github.io/quiz-app-boilerplate-chadwick-daniel'
  },
  {
    id: cuid(),
    title: 'Petful',
    desc: 'A challenge project during Thinkful\'s E.I. program, this project was meant to recap our study of Data Structures and Algorithms, and this app specifically employed Queues in order to deal with adoptees and pets in the shelter.  It is geared toward people who wish to adopt pets, and toward adoption agencies who wish to adopt pets who enter their shelter first.  We even went the extra mile and incorporated them into our React App, which made State very tricky!  We built it for a Thinkful project, and the content was decided for us.',
    picture: 'https://imgur.com/BDi7aMT.png',
    tech: ['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
    repo: 'https://github.com/thinkful-ei-narwhal/DSA-Petful-client-Cesar-Daniel',
    live: 'https://petful-alpha.vercel.app/'
  },
  {
    id: cuid(),
    title: 'PokeTeams',
    desc: 'Thinkful E.I.\'s 1st Capstone project, this full-stack application was created over a 2-week period with React and Node.js, and is easily the largest and most complicated of my projects.  PokeTeams is an application for creating and storing Pokemon Showdown teams in a permanent database as opposed to current pastebin solutions, and is for general users of the site Pokemon Showdown and other Pokemon enthusiasts.  In the future, this application will be fully open to the public and add many more features as necessary, becoming even larger and incorporating new technologies!  I built this because I myself had issues with saving teams, and I found that other people had this same problem.',
    picture: 'https://imgur.com/XIQeVp3.png',
    tech: ['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Jest', 'Enzyme', 'Mocha', 'Chai', 'Superteset', 'XSS', 'Winston', 'NYC', 'PostgresQL', 'Knex'],
    repo: 'https://github.com/DanielJSottile/poketeams-client',
    live: 'https://poketeams.now.sh/'
  },
  {
    id: cuid(),
    title: 'Spaced Repetition - Oratore',
    desc: 'Thinkful E.I.\'s 2nd Capstone project, this full-stack application was built in 1 week with a partner based on a specific set of guidelines, including passing Cypress client-side testing.  This app is designed as a spaced-repeition language learning application geared towards those who wish to lean a new language.  While this project gave little room for flexibility, my partner and I attempted as much as we could to make it as unique as possible.  This was built for a project for Thinkful, and the content of it was decided for us.',
    picture: 'https://imgur.com/Ou2b4X5.png',
    tech: ['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Jest', 'Enzyme', 'Mocha', 'Chai', 'Superteset', 'XSS', 'Winston', 'NYC', 'PostgresQL', 'Knex', 'Cypress'],
    repo: 'https://github.com/thinkful-ei-narwhal/Spaced-Repetition-client-Joseph-Daniel',
    live: 'https://oratore-spaced-repetition.vercel.app/'
  },
  {
    id: cuid(),
    title: 'Penny Thoughts',
    desc: 'Thinful E.I.\'s 3rd and final Capstone project, this full-stack application was built in 3 weeks with a team of 6 students, and allowed for full flexibility of application creation.  Penny Thoughts was my pitch idea to the group, which allows users to upload uplifting and positive messages to a database.  These messages are then pre-filtered by a TensorFlow.js AI Toxicity model, along with a user-based report system.  It uses extensive CSS animations and styling to create a fun, inviting atmosphere for the user!  We built this app because during these current times, positivity is at an all time low, and Penny Thoughts is a place where we can share what we can.',
    picture: 'https://imgur.com/Uugvuyt.png',
    tech: ['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Jest', 'Enzyme', 'Mocha', 'Chai', 'Superteset', 'XSS', 'Winston', 'NYC', 'PostgresQL', 'Knex', 'TensorFlow.js', 'Crypto-js'],
    repo: 'https://github.com/thinkful-ei-narwhal/penny-thoughts-client',
    live: 'https://penny-thoughts.vercel.app/'
  },
]; // each project has a title, description, picture, tech array, and two urls
const currPro = 0;
const soundPlay = false;
const menuPushed = false;
const error = null;

export default {
  projects,
  currPro,
  soundPlay,
  menuPushed,
  error
};
const projects = [
  {
    id: cuid(),
    title: 'Quiz App',
    desc: "An early project we completed in Thinkful's EI program, we had to create a quiz app from scratch using jQuery! We decided to have a quiz based on anime, and make it as fun as we could!",
    picture: '',
    tech: ['HTML5', 'CSS', 'Javascript', 'jQuery'],
    repo: 'https://github.com/thinkful-ei-narwhal/quiz-app-boilerplate-chadwick-daniel',
    live: 'https://thinkful-ei-narwhal.github.io/quiz-app-boilerplate-chadwick-daniel'
  },
  {
    id: cuid(),
    title: 'Project 2',
    desc: "Lorem ipsum dolor sit amet, pri an duis labitur postulant. Meis quas eos ea, te vis epicurei contentiones. Veri dissentiunt vim at, te solum errem referrentur nam. Cum eu primis audire legimus, ex his eros erant ornatus, illum labitur sea ex. Ex per dolor pertinacia.",
    picture: '',
    tech: ['HTML5', 'CSS', 'Javascript', 'jQuery', 'Node', 'Python'],
    repo: 'https://github.com/thinkful-ei-narwhal/quiz-app-boilerplate-chadwick-daniel',
    live: 'https://thinkful-ei-narwhal.github.io/quiz-app-boilerplate-chadwick-daniel'
  },
  {
    id: cuid(),
    title: 'Project 3',
    desc: "Lorem ipsum dolor sit amet, pri an duis labitur postulant. Meis quas eos ea, te vis epicurei contentiones. Veri dissentiunt vim at, te solum errem referrentur nam. Cum eu primis audire legimus, ex his eros erant ornatus, illum labitur sea ex. Ex per dolor pertinacia.",
    picture: '',
    tech: ['HTML5', 'CSS'],
    repo: 'https://github.com/thinkful-ei-narwhal/quiz-app-boilerplate-chadwick-daniel',
    live: 'https://thinkful-ei-narwhal.github.io/quiz-app-boilerplate-chadwick-daniel'
  },
  {
    id: cuid(),
    title: 'Project 4',
    desc: "Lorem ipsum dolor sit amet, pri an duis labitur postulant. Meis quas eos ea, te vis epicurei contentiones. Veri dissentiunt vim at, te solum errem referrentur nam. Cum eu primis audire legimus, ex his eros erant ornatus, illum labitur sea ex. Ex per dolor pertinacia.",
    picture: '',
    tech: ['HTML5', 'CSS', 'Javascript'],
    repo: 'https://github.com/thinkful-ei-narwhal/quiz-app-boilerplate-chadwick-daniel',
    live: 'https://thinkful-ei-narwhal.github.io/quiz-app-boilerplate-chadwick-daniel'
  }
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
import store from './store.js';

// generator functions

const soundToggleOne = function (bool) {
  if (!bool) {
    return '<button class="sound"><i class="fas fa-volume-mute"></i></button>';
  } else {
    return '<button class="sound"><i class="fas fa-volume-up"></i></button>';
  }
};

const floatingSoundTwo = function (bool) {
  if (!bool) {
    return '<button class="float-sound"><i class="fas fa-volume-mute"></i></button>';
  } else {
    return '<button class="float-sound"><i class="fas fa-volume-up"></i></button>';
  }
};

const generateErrorHTML = function(error) {
  return `
  <div class="error-box">
    <button id="exit-err">X</button>
    <h3>Error: ${error}</h3>
  </div>`;
};

const generateMenuHTML = function(bool) {
  if (bool) {
    return `
    <ul class="drop">
      <li>
        <a href="#anchor2" class="button-piano white">Biography <i class="fas fa-book"></i></a>
      </li>
      <li>
      <a class="piano-button black" href="https://github.com/DanielJSottile" target="_blank">Github <i class="fab fa-github-square"></i></a>
      </li>
      <li>
        <a href="#anchor3" class="button-piano white">Portfolio <i class="fas fa-pager"></i></a>
      </li>
      <li>
      <a class="piano-button black" href="https://www.linkedin.com/in/daniel-sottile/" target="_blank">LinkedIn <i class="fab fa-linkedin"></i></a>
      </li>
      <li>
        <a href="#anchor4" class="button-piano white">Extra <i class="fas fa-music"></i></a>
      </li>
    </ul>`;
  } else {
    return '';
  }
};

// Render Functions (error, form, MAIN)

const soundToggleOneRender = function() {
  const str = soundToggleOne(store.soundPlay);
  $('li.sound-toggle').html(str);
};

const floatingSoundTwoRender = function() {
  const str = floatingSoundTwo(store.soundPlay);
  $('.floating-sound').html(str);
};

const menuRender = function() {
  const str = generateMenuHTML(store.menuPushed);
  $('.dropdown').html(str);
};


const errorRender = function() {
  if (store.error) {
    const errorString = generateErrorHTML(store.error);
    // insert that HTML into the DOM
    $('.error-contain').html(errorString);
  } else {
    $('.error-contain').empty();
  }
};

const projectHTML = function (project) {

  // make a list for the tech list
  // when new tech is used on a project, add to this!

  const projTechs = project.tech.map(el => {
    let s = '';
    let elClass = '';
    if (el === 'HTML5') {
      elClass = '<i class="fab fa-html5"></i>';
    } if (el === 'CSS') {
      elClass = '<i class="fab fa-css3-alt"></i>';
    } if (el === 'Javascript') {
      elClass = '<i class="fab fa-js-square"></i>';
    } if (el === 'Node') {
      elClass = '<i class="fab fa-node-js"></i>';
    } if (el === 'Python') {
      elClass = '<i class="fab fa-python"></i>';
    } if (el === 'React') {
      elClass = '<i class="fab fa-react"></i>';
    }

    s += `
    <li>${el} ${elClass}</li>
  `;
    return s;
  }).join('');

  return `
  <div>
  <h3>${project.title}</h3>
  <p>${project.desc}</p><br>
  <img class="project-picture" src="${project.picture}" alt="a screenshot of ${project.title}"><br>
  <ul class="tech">
    <h3>Uses:</h3>
    ${projTechs}
  </ul>
  <h3>Repo:</h3>
  <a href="${project.repo}" target="_blank">${project.title} Repo <i class="fab fa-github-square"></i></a>
  <h3>Live Page:</h3>
  <a href="${project.live}" target="_blank">${project.title} Live Page <i class="fas fa-globe-americas"></i></a>
  </div>
  `;
};

// render function

const render = function () {
  soundToggleOneRender();
  floatingSoundTwoRender();
  menuRender();
  errorRender();

  const selectedPro = store.projects[store.currPro];

  const projectStr = projectHTML(selectedPro);

  // put it in baby

  $('.portfolio-section').html(projectStr);
};

// listener events

const projectSubmitListener = function() {
  $('main').on('change', '#project-selector', function () {
    let projectVal = $('option:selected').val();
    projectVal = Number(projectVal);
    store.currPro = projectVal;
    render();
  });
};

const menuButtonClickListener = function() {
  $('nav').on('click', '.menu', function(event) {
    event.preventDefault();
    store.menuPushed = !store.menuPushed;
    render();
  });
};


const soundToggleClickOneListener = function() {
  $('nav').on('click', '.sound-toggle', function(event) {
    event.preventDefault();
    store.soundPlay = !store.soundPlay;
    render();
  });
};

const soundToggleClickTwoListener = function() {
  $('main').on('click', '.floating-sound', function(event) {
    event.preventDefault();
    store.soundPlay = !store.soundPlay;
    render();
  });
};

const pianoButtonListener = function() {
  $('main').on('click', 'a.button-piano', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top }, 1000);
  });
};

const topMenuButtonListener = function() {
  $('nav').on('click', '.menu-button', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top }, 1000);
  });
};

// const soundcloudListener = function() {
//   $('main').on('click', 'iframe', function(event) {
//     event.preventDefault();
//     store.soundPlay = false;
//     render();
//   });
// };

// binder and export 

const bindEventListeners = function () {
  projectSubmitListener();
  menuButtonClickListener();
  soundToggleClickOneListener();
  soundToggleClickTwoListener();
  pianoButtonListener();
  topMenuButtonListener();
  // soundcloudListener();
};

// This object contains the only exposed methods from this module:
export default {
  render,
  bindEventListeners
};
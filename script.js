const menuIcon = document.getElementById('menu-icon');
const xIcon = document.getElementById('x-icon');
const menuList = document.getElementById('hidden');
const header = document.getElementById('header');
const about = document.getElementById('about');
const maincontact = document.getElementById('maincontact');
const footer = document.getElementById('icons');
const listItems1 = document.getElementById('item-list-1');
const listItems2 = document.getElementById('item-list-2');
const listItems3 = document.getElementById('item-list-3');
const form = document.querySelector('form');
const email = document.getElementById('email');
const errorMsg = document.querySelector('small');

function myFunction(x) {
  if (x.matches) {
    // If media query matches

    menuIcon.style.display = 'none';
    xIcon.style.display = 'block';
    menuList.style.display = 'block';
    header.style.height = '755px';
    about.style.marginTop = '755px';
    maincontact.style.marginTop = '755px';
    footer.style.top = '7358px';

    xIcon.addEventListener('click', () => {
      menuIcon.style.display = 'block';
      xIcon.style.display = 'none';
      menuList.style.display = 'none';
      header.style.height = '60px';
      about.style.marginTop = '0px';
      maincontact.style.marginTop = '0px';
      footer.style.top = '6738px';
    });
    listItems1.addEventListener('click', () => {
      menuIcon.style.display = 'block';
      xIcon.style.display = 'none';
      menuList.style.display = 'none';
      header.style.height = '60px';
      about.style.marginTop = '0px';
      maincontact.style.marginTop = '0px';
      footer.style.top = '6738px';
    });
    listItems2.addEventListener('click', () => {
      menuIcon.style.display = 'block';
      xIcon.style.display = 'none';
      menuList.style.display = 'none';
      header.style.height = '60px';
      about.style.marginTop = '0px';
      maincontact.style.marginTop = '0px';
      footer.style.top = '6738px';
    });
    listItems3.addEventListener('click', () => {
      menuIcon.style.display = 'block';
      xIcon.style.display = 'none';
      menuList.style.display = 'none';
      header.style.height = '60px';
      about.style.marginTop = '0px';
      maincontact.style.marginTop = '0px';
      footer.style.top = '6738px';
    });
  } else {
    listItems1.addEventListener('click', () => {
      listItems1.style.textDecoration = 'underline';
      listItems2.style.textDecoration = 'none';
      listItems3.style.textDecoration = 'none';
    });
    listItems2.addEventListener('click', () => {
      listItems1.style.textDecoration = 'none';
      listItems2.style.textDecoration = 'underline';
      listItems3.style.textDecoration = 'none';
    });
    listItems3.addEventListener('click', () => {
      listItems1.style.textDecoration = 'none';
      listItems2.style.textDecoration = 'none';
      listItems3.style.textDecoration = 'underline';
    });
  }
}

menuIcon.addEventListener('click', () => {
  const x = window.matchMedia('(max-width: 768px)');
  myFunction(x);
});

const showItemInfo = [
  {
    title: 'To Do List',
    image: './images/screen-short-1.png',
    desc: 'In this project, I am building a simple HTML list of To Do tasks. The list will be styled according to the specifications. This simple web page will be built using webpack and served by a webpack dev server.',
    technologies: ['css', 'html', 'JavaScript'],
    liveVersion: 'samik997-to-do-list.netlify.app',
    liveSource: 'https://github.com/samiullah997/To-Do-List.git/',
  },
  {
    title: 'Book an Appointment',
    image: './images/book_an_appointment.png',
    desc: 'Bike reservation is a web application that allows users to view and reserve a bike, i.e. Yamaha, Suzuki Honda e.t.c. A user can reserve one bike per session on separate dates.',
    technologies: ['tailwind', 'html', 'react', 'redux', 'JavaScript', 'api'],
    liveVersion: 'https://deploy-preview-13--gilded-begonia-47c85d.netlify.app',
    liveSource: 'https://github.com/samiullah997/book_an_appointment_front_end',
  },
  {
    title: 'Budget App',
    image: './images/bugdet_app.png',
    desc: 'Budget App is a web application that allows users to track their expenses and income. A user can add their income and expenses and the app will calculate the balance.',
    technologies: ['tailwind', 'html', 'ruby on rails'],
    liveVersion: 'https://budget-app-sami.herokuapp.com/',
    liveSource: 'https://github.com/samiullah997/Budget-App.git',
  },
  {
    title: 'Game of Life',
    image: './images/game_of_life.png',
    desc: 'In this project, I am building a simple HTML list of To Do tasks. The list will be styled according to the specifications. This simple web page will be built using webpack and served by a webpack dev server.',
    technologies: ['css', 'html', 'scss', 'webpack', 'JavaScript'],
    liveVersion: 'https://duanedave.github.io/Capstone-Kanban',
    liveSource: 'https://github.com/samiullah997/Capstone-Kanban',
  },
  {
    title: 'Book Store',
    image: './images/book_store.png',
    desc: 'In this project I am building a Bookstore CMS. The app will allow users to add books, remove books, and filter books by category. This simple web page will be built using React and Redux.',
    technologies: ['css', 'html', 'react', 'redux', 'JavaScript'],
    liveVersion: 'https://subtle-brigadeiros-d2870f.netlify.app',
    liveSource: 'https://github.com/samiullah997/bookstore',
  },
  {
    title: 'Super Heroes',
    image: './images/super_hero.png',
    desc: 'In this project I have created a single page application using React and Redux. The application fetches data from an API and displays it on the page. The user can filter the data by name and also get heroes to the movies.',
    technologies: ['css', 'html', 'react', 'redux', 'JavaScript'],
    liveVersion: 'https://fascinating-pastelito-bbdd20.netlify.app',
    liveSource: 'https://github.com/samiullah997/thired-capstone-project',
  },
  {
    title: 'Math-Magicians',
    image: './images/calculater.png',
    desc: 'In this project, you should continue with the development of the Math Magicians app. You will develop a React component that will hold the core functionality: a calculator. The basic operations are addition, subtraction, multiplication, and division. You will also need to add some styling to your components.',
    technologies: ['css', 'html', 'react', 'redux', 'JavaScript'],
    liveVersion: 'https://neon-gaufre-c1a782.netlify.app',
    liveSource: 'https://github.com/samiullah997/math-magicians',
  },
];

const setCardData = document.getElementById('recent-frame-2');
showItemInfo.forEach((itemsData, position) => {
  let content = `<div class="card-work media-card card-${position}" style="background-image: url(${itemsData.image});" id="card-work">`;
  content += '<div class="post-right-block">';
  content += `<h1 class="card-post-title" id="post-title">${itemsData.title}</h1>`;
  content += '<p class="supporting-text" id="post-desc">';
  content += ` ${itemsData.desc}`;
  content += '</p>';
  content += '<ul class="post-tags-2">';
  itemsData.technologies.forEach((techData, pos) => {
    content += `<li id="post-tech-${pos}">${techData}</li>`;
  });
  content += '</ul>';
  content += '</div>';
  content += `<div class="btn-action" data-modal-target="#modal" id="show-modal-${position}">`;
  content += '<div class="post-btn-enable-2">';
  content += '<a class="btn-text">See Project</a>';
  content += '</div>';
  content += '</div>';
  content += '</div>';

  setCardData.innerHTML += content;
});

// modal work start
function setData(Data) {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = Data.title;
  document.getElementById('ul').innerHTML = '';
  Data.technologies.forEach((techsItems) => {
    const ul = document.getElementById('ul');
    ul.innerHTML += `<li>${techsItems}</li>`;
  });
  document.getElementById('description').innerText = Data.desc;
  document.getElementById('image').style.backgroundImage = `url('${Data.image}')`;
  document.getElementById('liveButton').setAttribute('href', Data.liveVersion);
  document.getElementById('liveSource').setAttribute('href', Data.liveSource);
}

showItemInfo.forEach((itemsData2, ind) => {
  document.getElementById(`show-modal-${ind}`).addEventListener('click', () => {
    setData(itemsData2);
  });
});
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('active');
});

// modal work End

// form validation start

form.addEventListener('submit', (e) => {
  const emailValue = email.value;
  if (emailValue !== emailValue.toLowerCase()) {
    e.preventDefault();
    errorMsg.classList.add('display-content');
  }
});

// form localStorage Setting
const userName = form.elements.name;
const userEmail = form.elements.email;
const userMessage = form.elements.comment;
function populateStorage() {
  const userInput = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.comment.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
}
function setForm() {
  const storedInput = JSON.parse(localStorage.getItem('userInput'));
  const currentUserName = storedInput.name;
  const currentUserEmail = storedInput.email;
  const currentMessage = storedInput.message;
  form.elements.name.value = currentUserName;
  form.elements.email.value = currentUserEmail;
  form.elements.comment.value = currentMessage;
}
if (!localStorage.getItem('userInput')) {
  populateStorage();
} else {
  setForm();
}
userName.onchange = populateStorage;
userEmail.onchange = populateStorage;
userMessage.onchange = populateStorage;

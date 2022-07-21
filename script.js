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
    title: 'Multi-Post Stories',
    image: './images/img-placeholder-1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
    liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
  },
  {
    title: 'Multi-Post Stories',
    image: './images/img-placeholder-1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
    liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
  },
  {
    title: 'Multi-Post Stories',
    image: './images/img-placeholder-1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
    liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
  },
  {
    title: 'Multi-Post Stories',
    image: './images/img-placeholder-1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
    liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
  },
  {
    title: 'Multi-Post Stories',
    image: './images/img-placeholder-1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
    liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
  },
  {
    title: 'Multi-Post Stories',
    image: './images/img-placeholder-1.png',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
    liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
  },
];

const setCardData = document.getElementById('recent-frame-2');
showItemInfo.forEach((itemsData, position) => {
  let content = `<div class="card-work media-card-${position + 1}" id="card-work">`;
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
  content += `<div class="btn-action" data-modal-target="#modal" id="show-modal-${position + 1}">`;
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
  document.getElementById('show-modal-'.concat(ind)).addEventListener('click', () => {
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

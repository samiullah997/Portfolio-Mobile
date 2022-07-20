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
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    menuIcon.addEventListener('click', () => {
      menuIcon.style.display = 'none';
      xIcon.style.display = 'block';
      menuList.style.display = 'block';
      header.style.height = '755px';
      about.style.marginTop = '755px';
      maincontact.style.marginTop = '755px';
      footer.style.top = '7358px';
    });
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

const x = window.matchMedia('(max-width: 768px)');
myFunction(x); // Call listener function at run time

// modal work start
const showItemInfo = {
  title: 'Multi-Post Stories',
  image: '1.png',
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  technologies: {
    tech1: 'css',
    tech2: 'html',
    tech3: 'bootstrap',
    tech4: 'ruby',
  },
  liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
  liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
};
const showModal = document.getElementById('show-modal');
const closeModal = document.getElementById('close-modal');
showModal.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('image').backgroundImage = URL(document.getElementById('post-img').getAttribute.URL);
  document.getElementById('description').innerText = showItemInfo.description;
});
closeModal.addEventListener('click', () => {
  document.getElementById('moda').classList.remove('active');
});
// modal work End

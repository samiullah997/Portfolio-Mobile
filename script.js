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
  title: document.getElementById('h-title').innerText,
  image: document.getElementById('post-img').getAttribute('src'),
  description:document.getElementById('description').innerText,
  technologies: {
    tech1: document.getElementById('post-tech1').innerText,
    tech2: document.getElementById('post-tech2').innerText,
    tech3: document.getElementById('post-tech3').innerText,
    tech4: document.getElementById('post-tech4').innerText,
  },
  liveVersion: 'https://samiullah997.github.io/Portfolio-Mobile/',
  liveSource: 'https://github.com/samiullah997/Portfolio-Mobile',
};
const showModal = document.getElementById('show-modal');
const showModal1 = document.getElementById('show-modal-1');
const showModal2 = document.getElementById('show-modal-2');
const showModal3 = document.getElementById('show-modal-3');
const showModal4 = document.getElementById('show-modal-4');
const showModal5 = document.getElementById('show-modal-5');
const showModal6 = document.getElementById('show-modal-6');
const closeModal = document.getElementById('close-modal');
showModal.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('tech1').innerHTML =showItemInfo.technologies.tech1;
  document.getElementById('tech2').innerHTML =showItemInfo.technologies.tech2;
  document.getElementById('tech3').innerHTML =showItemInfo.technologies.tech3;
  document.getElementById('description').innerText = showItemInfo.description;
  document.getElementById('image').style.backgroundImage =  "url('"+showItemInfo.image+"')";
  document.getElementById('liveButton').setAttribute('href',showItemInfo.liveVersion);
  document.getElementById('liveSource').setAttribute('href',showItemInfo.liveSource);
});
showModal1.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('tech1').innerHTML =showItemInfo.technologies.tech1;
  document.getElementById('tech2').innerHTML =showItemInfo.technologies.tech2;
  document.getElementById('tech3').innerHTML =showItemInfo.technologies.tech3;
  document.getElementById('description').innerText = showItemInfo.description;
  document.getElementById('image').style.backgroundImage =  "url('"+showItemInfo.image+"')";
  document.getElementById('liveButton').setAttribute('href',showItemInfo.liveVersion);
  document.getElementById('liveSource').setAttribute('href',showItemInfo.liveSource);
});
showModal2.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('tech1').innerHTML =showItemInfo.technologies.tech1;
  document.getElementById('tech2').innerHTML =showItemInfo.technologies.tech2;
  document.getElementById('tech3').innerHTML =showItemInfo.technologies.tech3;
  document.getElementById('description').innerText = showItemInfo.description;
  document.getElementById('image').style.backgroundImage =  "url('"+showItemInfo.image+"')";
  document.getElementById('liveButton').setAttribute('href',showItemInfo.liveVersion);
  document.getElementById('liveSource').setAttribute('href',showItemInfo.liveSource);
});
showModal3.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('tech1').innerHTML =showItemInfo.technologies.tech1;
  document.getElementById('tech2').innerHTML =showItemInfo.technologies.tech2;
  document.getElementById('tech3').innerHTML =showItemInfo.technologies.tech3;
  document.getElementById('description').innerText = showItemInfo.description;
  document.getElementById('image').style.backgroundImage =  "url('"+showItemInfo.image+"')";
  document.getElementById('liveButton').setAttribute('href',showItemInfo.liveVersion);
  document.getElementById('liveSource').setAttribute('href',showItemInfo.liveSource);
});
showModal4.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('tech1').innerHTML =showItemInfo.technologies.tech1;
  document.getElementById('tech2').innerHTML =showItemInfo.technologies.tech2;
  document.getElementById('tech3').innerHTML =showItemInfo.technologies.tech3;
  document.getElementById('description').innerText = showItemInfo.description;
  document.getElementById('image').style.backgroundImage =  "url('"+showItemInfo.image+"')";
  document.getElementById('liveButton').setAttribute('href',showItemInfo.liveVersion);
  document.getElementById('liveSource').setAttribute('href',showItemInfo.liveSource);
});
showModal5.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('tech1').innerHTML =showItemInfo.technologies.tech1;
  document.getElementById('tech2').innerHTML =showItemInfo.technologies.tech2;
  document.getElementById('tech3').innerHTML =showItemInfo.technologies.tech3;
  document.getElementById('description').innerText = showItemInfo.description;
  document.getElementById('image').style.backgroundImage =  "url('"+showItemInfo.image+"')";
  document.getElementById('liveButton').setAttribute('href',showItemInfo.liveVersion);
  document.getElementById('liveSource').setAttribute('href',showItemInfo.liveSource);
});
showModal6.addEventListener('click', () => {
  document.getElementById('modal').classList.add('active');
  document.getElementById('postTitle').innerText = showItemInfo.title;
  document.getElementById('tech1').innerHTML =showItemInfo.technologies.tech1;
  document.getElementById('tech2').innerHTML =showItemInfo.technologies.tech2;
  document.getElementById('tech3').innerHTML =showItemInfo.technologies.tech3;
  document.getElementById('description').innerText = showItemInfo.description;
  document.getElementById('image').style.backgroundImage =  "url('"+showItemInfo.image+"')";
  document.getElementById('liveButton').setAttribute('href',showItemInfo.liveVersion);
  document.getElementById('liveSource').setAttribute('href',showItemInfo.liveSource);
});
closeModal.addEventListener('click', () => {
  document.getElementById('modal').classList.remove('active');
});
// modal work End

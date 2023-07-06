// Mobile Nav Toggle
const mobileBtn = document.querySelector(".mobile-toggle-btn");
const headerNav = document.querySelector(".header");
const navLink = document.querySelectorAll(".link-nav");
const profilePic = document.querySelector(".profile-pic");

mobileBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  profilePic.classList.toggle("hide-profile");
});

[].forEach.call(navLink, (element) => {
  element.onclick = () => {
    headerNav.classList.remove("active");
  };
});

// Implement Dynamic Functionality for cards and modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const gridItems = document.getElementById("grid");

  // Create a new object
  const mainCardDetails = {
    title: "SRH-ERP",
    desc: "SRH-ERP is a web application that allows users to manage their employees, departments, and projects. Users can add, edit, and delete employees, departments, and projects. Built with Spring Boot.",
    languages: ["Html", "Css", "JavaScript", "SpringBoot", "Java", "MySQL"],
    live: 'http://16.16.13.53:8080/SRHERP',
    source: 'https://github.com/samiullah997/SRH-ERP.git',
    img: "./assets/project-img/srherp.png",
  };

  const {
    title, desc, languages, live, source, img,
  } = mainCardDetails;
  // Get all data from languages array in side mainCardDetails object
  const languagesArr = languages
    .map((language) => `<li>${language}</li>`)
    .join("");

  // Add dynamic data in main card
  let mainCardData = "";
  mainCardData += `
                  <h1 class='work-main-heading'>My Recent Works</h1>
                  <hr class='divider' />
                  <div class='main-card' id='main'>
                    <img src=${img} class='post-image'/>
                    <div class='main-card-content'>
                      <h4 class='work-title-post'>${title}</h4>
                      <p class='work-supporting-text'>
                      ${desc.slice(0, 100)} ...
                      </p>
                      <ul class='languages-list'>
                        ${languagesArr}
                      </ul>
                      <div class='btn-left'>
                        <button class='btn-primary btn' onclick='mainModal()'>See Project</button>
                      </div>
                    </div>
                  </div>
  `;

  // Create new array of objects
  const cardDetails = [
    {
      id: 1,
      title: 'Public Internet Speed Test',
      img: './assets/project-img/pist.gif',
      desc: 'In this project, I built a speed test app that tests the speed of your internet connection. The app is built with React and Redux. The app is deployed on netlify. Internet Speed Test is a web application that tests the speed of your internet connection. The app is built with React and Redux. The app is deployed on netlify.',
      languages: ['Rails', 'React', 'Tailwind', 'Redux', 'JavaScript', 'API'],
      live: 'https://public-internet-speed.netlify.app',
      source: 'https://github.com/samiullah997/internet-speed-test-front-end.git',
    },
    {
      id: 2,
      title: 'To Do List',
      img: './assets/project-img/screen-short-1.gif',
      desc: 'I built a simple HTML list of To Do tasks in this project. The list is styled according to the specifications. This simple web page will be built using webpack and served by a webpack dev server.',
      languages: ['CSS', 'HTML', 'JavaScript'],
      live: 'https://samik997-to-do-list.netlify.app/',
      source: 'https://github.com/samiullah997/To-Do-List.git/',
    },
    {
      id: 3,
      title: 'Book an Appointment',
      img: './assets/project-img/book_an_appointment.gif',
      desc: 'Bike reservation is a web application that allows users to view and reserve a bike, i.e., Yamaha, Suzuki, Honda, etc. A user can reserve one bike per session on separate dates. Built with React and Ruby on Rails.',
      languages: ['Tailwind', 'HTML', 'React', 'Redux', 'JavaScript', 'API'],
      live: 'https://deploy-preview-13--gilded-begonia-47c85d.netlify.app',
      source: 'https://github.com/samiullah997/book_an_appointment_front_end',
    },
    {
      id: 4,
      title: 'Budget App',
      img: './assets/project-img/bugdet_app.gif',
      desc: 'Budget App is a web application that allows users to track their expenses and income. Users can add their income and expenses, and the app will calculate the balance. Built with Ruby on rails and Bootstrap.',
      languages: ['Tailwind', 'HTML', 'Ruby on Rails'],
      live: 'https://budget-app-sami.herokuapp.com/',
      source: 'https://github.com/samiullah997/Budget-App.git',
    },
    {
      id: 5,
      title: 'Game of Life',
      img: './assets/project-img/game_of_life.gif',
      desc: 'This app is built with HTML | CSS | JAVASCRIPT | WEBPACK and JEST it uses multiple API to render popular movies and enable users to have social interactivity such as like and comments.',
      languages: ['CSS', 'HTML', 'SCSS', 'Webpack', 'JavaScript'],
      live: 'https://duanedave.github.io/Capstone-Kanban',
      source: 'https://github.com/samiullah997/Capstone-Kanban',
    },
    {
      id: 6,
      title: 'Book Store',
      img: './assets/project-img/book_store.jpg',
      desc: 'In this project, I built a Bookstore CMS. The app allows users to add, remove, and filter books by category. This simple web page is built using React and Redux.',
      languages: ['CSS', 'HTML', 'React', 'Redux', 'JavaScript'],
      live: 'https://subtle-brigadeiros-d2870f.netlify.app',
      source: 'https://github.com/samiullah997/bookstore',
    },
    {
      id: 7,
      title: 'Super Heroes',
      img: './assets/project-img/super_hero.jpg',
      desc: 'In this project, I created a single-page application using React and Redux. The application fetches data from an API and displays it on the page. The user can filter the data by name and get movie heroes.',
      languages: ['CSS', 'HTML', 'React', 'Redux', 'JavaScript'],
      live: 'https://fascinating-pastelito-bbdd20.netlify.app',
      source: 'https://github.com/samiullah997/thired-capstone-project',
    },
    {
      id: 8,
      title: 'Math-Magicians',
      img: './assets/project-img/calculater.gif',
      desc: 'In this project, I created a  Math Magicians app. I developed the app using React components that hold the core functionality: a calculator. The primary operations are addition, subtraction, multiplication, and division. I styled the app using Bootstrap.',
      languages: ['CSS', 'HTML', 'React', 'Redux', 'JavaScript'],
      live: 'https://neon-gaufre-c1a782.netlify.app',
      source: 'https://github.com/samiullah997/math-magicians',
    },
    {
      id: 9,
      title: 'SMS',
      img: './assets/project-img/sms.jpg',
      desc: 'The School Management System project in PHP is a comprehensive software solution that streamlines administrative tasks, student records management, and communication between teachers, students, and parents, enhancing overall efficiency and organization within educational institutions. This user-friendly system offers features such as attendance tracking, grade management, timetable creation, and report generation, making it an indispensable tool for effective school management.',
      languages: ['CSS', 'HTML', 'Bootstrap', 'PHP', 'JavaScript'],
      live: 'https://shrumstech.000webhostapp.com',
      source: 'https://github.com/samiullah997/sms.git',
    },
    {
      id: 10,
      title: 'Leaderboard',
      img: './assets/project-img/leaderboard.gif',
      desc: 'In this activity I will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. I have develop a first working version of the app following a wireframe, but without styling - just focus on functionality. In following activities, I will consume the Leaderboard API using JavaScript async and await…',
      languages: ["Html", "Css", "JavaScript", "ReactJS"],
      live: "https://sami-leader-board.netlify.app/",
      source: "https://github.com/samiullah997/Leaderboard.git",
    },
  ];

  // Fetch all cards details from cardsDetails array of objects
  let cardData = "";
  cardDetails.map((card) => {
    const {
      id, img, title, desc, languages,
    } = card;
    // Fetch languages array from a languages object
    const languagesArr = languages.map((lang) => `<li>${lang}</li>`).join("");
    // Add dynamic in other cards
    cardData += `
                <div class='card-desktop' id='card-image-${id}'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn-hidden'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
                <div class='card'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
    `;
    return cardData;
  });

  // Show all data in main and other cards
  gridItems.innerHTML = mainCardData + cardData;

  // Add dynamic modal for main cards data
  mainModal = () => {
    let modalDetails = "";
    modalDetails += `
                    <div class='modal'>
                      <div class='modal-header'>
                        <h1>${title}</h1>
                        <ion-icon name='close' class='modal-close-icon'></ion-icon>
                      </div>
                      <ul class='modal-languages-list'>
                        ${languages.map((lang) => `<li>${lang}</li>`).join("")}
                      </ul>
                      <div class='modal-content'>
                        <div class='modal-image-mobile'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <div class='modal-image-desktop'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <p class='title'>${desc}</p>
                      </div>
                      <div class='buttons'>
                        <a href='${live}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                  alt='live-icon'
                                  class='icon-right'
                                  height='18'/>
                            </span>
                        </a>
                        <a href='${source}' class='btn-primary' target='_blank'>
                          See Source
                          <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                        </a>
                      </div>
                    </div>
  `;

    // Show Data in modal
    modal.innerHTML = modalDetails;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // Add dynamic modal details for other cards
  otherModal = (id) => {
    const data = cardDetails.find((card) => card.id === id);
    let modalData = "";
    modalData += `
                  <div class='modal'>
                    <div class='modal-header'>
                      <h1>${data.title}</h1>
                      <ion-icon name='close' class='modal-close-icon'></ion-icon>
                    </div>
                    <ul class='modal-languages-list'>
                      ${data.languages
    .map((lang) => `<li>${lang}</li>`)
    .join("")}
                    </ul>
                    <div class='modal-content'>
                      <div class='modal-image-mobile'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <div class='modal-image-desktop'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <p class='title'>${data.desc}</p>
                    </div>
                    <div class='buttons'>
                      <a href='${data.live
}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                      </a>
                      <a href='${data.source
}' class='btn-primary' target='_blank'>
                        See Source
                        <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                              alt='live-icon'
                              class='icon-right'
                              height='18'/>
                        </span>
                      </a>
                    </div>
                  </div>
    `;

    // Show Data in modal
    modal.innerHTML = modalData;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // When user clicks out side of the modal, close the modal.
  document.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  new Typed(".auto-change", {
    strings: [
      "Web Developer",
      "Full Stack Developer",
      "Android Developer",
      "Front-end Developer",
      "React Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
});

// Form Validation
const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert-danger");

const submitForm = (e) => {
  e.preventDefault();
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const emailValue = email.value;
  const nameValue = fullName.value;
  const messageValue = message.value;

  const showAlert = (message) => {
    alert.classList.add("show-alert");
    if (message === "Message sent successfully!") {
      alert.innerHTML = `<span> <ion-icon name="checkmark" class="alert-icon"></ion-icon> </span> ${message}`;
    } else {
      alert.innerHTML = `<span> <ion-icon name="close-circle" class="alert-icon"></ion-icon> </span> ${message}`;
    }
    setTimeout(() => {
      alert.classList.remove("show-alert");
      alert.classList.remove("alert-success");
    }, 2500);
  };

  if (!nameValue || !emailValue || !messageValue) {
    showAlert("Please enter all required fields");
    return;
  }

  if (emailValue !== emailValue.toLowerCase()) {
    showAlert("Please enter lowercase letters.");
    return;
  }

  if (!regex.test(emailValue)) {
    showAlert("Invalid email address!");
    return;
  }

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "samiullahk997@gmail.com",
    Password: "A5A65B90E0968D55A54B842273F5EAB8770F",
    To: "samiullahk997@gmail.com",
    From: "samiullahk997@gmail.com",
    Subject: "Contact Information",
    Body: `Name: ${nameValue} <br/> Email: ${emailValue} <br/> Message: ${messageValue}`,
  }).then((msg) => {
    if (msg === "OK") {
      alert.classList.add("show-alert");
      alert.classList.add("alert-success");
      showAlert("Message sent successfully!");
    }
    email.value = "";
    fullName.value = "";
    message.value = "";
    localStorage.removeItem("user");
  });
};

submit.addEventListener("click", submitForm);

// Store data in localStorage
const reset = document.getElementById("reset");

changeHandler = () => {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem("user", JSON.stringify(field));
};

if (localStorage.getItem("user") === null) {
  email.value = "";
  fullName.value = "";
  message.value = "";
} else {
  const user = JSON.parse(localStorage.getItem("user"));
  email.value = user.email;
  fullName.value = user.name;
  message.value = user.message;
}

const resetFrom = (e) => {
  e.preventDefault();
  email.value = "";
  fullName.value = "";
  message.value = "";
  localStorage.removeItem("user");
};

reset.addEventListener("click", resetFrom);

// Select all the sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Add an event listener to the window that listens for a scroll event
document.addEventListener("scroll", () => {
  // Get the current position of the window
  const currentPosition = window.scrollY + 80;
  // Loop through all the sections
  sections.forEach((section) => {
    // Check if the current position is within the section
    if (
      section.offsetTop <= currentPosition
      && section.offsetTop + section.offsetHeight > currentPosition
    ) {
      // Loop through all the nav links
      navLinks.forEach((link) => {
        // Remove the active class from all the nav links
        link.classList.remove("nav-active");
        // Check if the section id is the same as the nav link href
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          // Add the active class to the nav link
          link.classList.add("nav-active");
        }
      });
    }
  });
});

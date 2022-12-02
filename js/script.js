'use script';

const homeBtn = document.getElementById('home-btn');
const closeBtn = document.getElementById('close-btn');
const navBar = document.getElementById('nav-bar-ul');
const main = document.getElementById('main');
const intro = document.getElementById('intro');
const navBarBlock = document.getElementById('nav-bar');
const navBarList = document.querySelectorAll('.nav-bar-list');
const footer = document.getElementById('footer');

/* OPEN MOBILE MENU */
homeBtn.addEventListener('click', () => {
  navBar.style.display = 'flex';
  homeBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  main.style.display = 'none';
  intro.style.display = 'none';
  footer.style.display = 'none';
  navBarBlock.style.height = '100vh';
});

/* CLOSE MOBILE MENU USING MEDIA QUERIES */
function closeMenu() {
  navBar.style.display = 'none';
  homeBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  main.style.display = 'block';
  intro.style.display = 'block';
  footer.style.display = 'block';
  navBarBlock.style.height = 'auto';
}

const mediaQuery = window.matchMedia('(min-width: 768px)');
function handleTabletChange(e) {
  if (!e.matches) {
    closeBtn.addEventListener('click', closeMenu);
    navBarList.forEach((e) => {
      e.addEventListener('click', closeMenu);
    });
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

/* CREATE SPEAKERS ARRAY OF OBJECTS  */
const speakers = [
  {
    image: './images/speakers/speaker_01.png',
    fullName: 'Yohai Benkler',
    title: 'Professor, Harvard Law School',
    bio: 'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia.',
  },
  {
    image: './images/speakers/speaker_02.png',
    fullName: 'Jeon Gilnam',
    title: 'Professor Emeritus, Korea Advanced Institute of Science and Technology (KAIST)',
    bio: 'He developed SDN, the first Internet protocol network in Asia, and led Korea first dedicated line Internet connection in 1990, opening the Internet era in earnest.',
  },
  {
    image: './images/speakers/speaker_03.png',
    fullName: 'Soyoung Roh',
    title: 'Art Center Butterfly Director, CC Korea',
    bio: 'She opened Art Center Nabi, Korea first digital art specialized institution, and has been in office ever since.',
  },
  {
    image: './images/speakers/speaker_04.png',
    fullName: 'Julia Reda',
    bio: 'European integration and youth participation in politics and democracy through online are key concerns, according to a report that could potentially impact changes to the European Union copyright laws in July.',
  },
  {
    image: './images/speakers/speaker_05.png',
    fullName: 'Laila Tretikov',
    title: 'Wikimedia Foundation Executive Director',
    bio: 'Laila Tretikow is executive director of the Wikimedia Foundation, the nonprofit that runs Wikipedia. Wikipedia is available for free every month in 290 languages to more than 100 million people, nearly half of the worlds population.',
  },
  {
    image: './images/speakers/speaker_06.png',
    fullName: 'Ryan Merkley',
    title: 'CEO of Creative Commons, former COO of the Mozilla Foundation',
    bio: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. Open government, open source, and other open movements have been actively carried out.',
  },
];

/* CREATE SPEAKERS SECTION */
const article = document.createElement('article');
article.id = 'featured-speakers';
article.innerHTML = `
  <h2>Featured Speakers</h2>
  <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>

  <section class="speaker-section"></section>

  <button id="more-speakers">MORE&nbsp;&nbsp;<img id="more-speakers-img" src="./images/nav/red_arrow_down.svg" alt="down icon"></button>
`;
const nodes = document.getElementsByTagName('article');
const lastNode = document.getElementsByTagName('article')[nodes.length - 1];
lastNode.parentNode.insertBefore(article, lastNode.nextSibling);

/* ADD CONTENT TO SPEAKERS SECTION */
const dynamicSpeakerSection = document.querySelector('.speaker-section');
const createSpeakers = (nbr) => {
  let featuredSpeakersContent = '';
  for (let i = 0; i < nbr; i += 1) { // speakers.length
    featuredSpeakersContent += `
        <div class="speaker-section-div">
          <div class="speaker-img">
            <div id="speaker-section-img-container">
              <img id="speaker-section-img" src=${speakers[i].image} alt=${speakers[i].fullName}>
            </div>
          </div>
          <div class="speaker-details">
            <h3>${speakers[i].fullName}</h3>
            <h4>${speakers[i].title}</h4>
            <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>
            <p>${speakers[i].bio}</p>
          </div>
        </div>
    `;
  }
  dynamicSpeakerSection.innerHTML = featuredSpeakersContent;
};

/* MORE SPEAKERS BUTTON */
const moreBtn = document.getElementById('more-speakers');

const showSpeakers = () => {
  if (window.innerWidth < 768) {
    createSpeakers(2);
  } else {
    createSpeakers(speakers.length);
  }
};

window.addEventListener('load', () => {
  showSpeakers();
});

window.addEventListener('resize', () => {
  showSpeakers();
});

moreBtn.addEventListener('click', () => {
  const speakersItems = document.querySelectorAll('.speaker-section-div');
  if (speakersItems.length === speakers.length) {
    createSpeakers(2);
    moreBtn.innerHTML = 'MORE&nbsp;&nbsp;<img id="more-speakers-img" src="./images/nav/red_arrow_down.svg" alt="down icon">';
  } else {
    createSpeakers(speakers.length);
    moreBtn.innerHTML = 'LESS&nbsp;&nbsp;<img id="more-speakers-img" src="./images/nav/red_arrow_up.svg" alt="up icon">';
  }
});
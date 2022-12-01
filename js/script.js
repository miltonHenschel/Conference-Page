'use script';

/* MOBILE MENU */
// const body = document.querySelector('body');
const homeBtn = document.getElementById('home-btn');
const closeBtn = document.getElementById('close-btn');
const navBar = document.getElementById('nav-bar-ul');
const main = document.getElementById('main');
const intro = document.getElementById('intro');
const navBarBlock = document.getElementById('nav-bar');
const navBarList = document.querySelectorAll('.nav-bar-list');
const footer = document.getElementById('footer');
// const mainProgram = document.getElementById('main-program');
// const featuredSpeakers = document.getElementById('featured-speakers');
const article = document.createElement('article');

homeBtn.addEventListener('click', () => {
  navBar.style.display = 'flex';
  homeBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  main.style.display = 'none';
  intro.style.display = 'none';
  footer.style.display = 'none';
  navBarBlock.style.height = '100vh';
});

function closeMenu() {
  navBar.style.display = 'none';
  homeBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  main.style.display = 'block';
  intro.style.display = 'block';
  footer.style.display = 'block';
  navBarBlock.style.height = 'auto';
}

closeBtn.addEventListener('click', closeMenu);
navBarList.forEach((e) => {
  e.addEventListener('click', closeMenu);
});

/* CREATE SPEAKERS ARRAY OF OBJECTS  */
// const speakers = [
//   {
//     name:

//   }
// ];

/* DYNAMIC SPEAKERS SECTION */
article.id = 'featured-speakers';
article.innerHTML = `
  <h2>Featured Speakers</h2>
  <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>

  <section class="speaker-section">
    <div class="speaker-section-div">
        <div class="speaker-img"><img src="./images/speakers/speaker_01.png" alt="speaker 1"></div>
        <div class="speaker-details">
          <h3>Yohai Benkler</h3>
          <h4>Professor, Harvard Law School</h4>
          <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>
          <p>Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia.</p>
        </div>
    </div>

    <div class="speaker-section-div">
        <div class="speaker-img"><img src="./images/speakers/speaker_02.png" alt="speaker 2"></div>
        <div class="speaker-details">
          <h3>Jeon Gilnam</h3>
          <h4>Professor Emeritus, Korea Advanced Institute of Science and Technology (KAIST)</h4>
          <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>
          <p>He developed SDN, the first Internet protocol network in Asia, and led Korea's first dedicated line Internet connection in 1990, opening the Internet era in earnest.</p>
        </div>
    </div>

    <div class="speaker-section-div">
        <div class="speaker-img"><img src="./images/speakers/speaker_03.png" alt="speaker 3"></div>
        <div class="speaker-details">
          <h3>Soyoung Roh</h3>
          <h4>Art Center Butterfly Director, CC Korea</h4>
          <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>
          <p>She opened 'Art Center Nabi', Korea's first digital art specialized institution, and has been in office ever since.</p>
        </div>
    </div>

    <div class="speaker-section-div">
        <div class="speaker-img"><img src="./images/speakers/speaker_04.png" alt="speaker 4"></div>
        <div class="speaker-details">
          <h3>Julia Reda</h3>
          <h4>Representative of the Young Pirates of Europe</h4>
          <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>
          <p>European integration and youth participation in politics and democracy through online are key concerns, according to a report that could potentially impact changes to the European Union's copyright laws in July.</p>
        </div>
    </div>

    <div class="speaker-section-div">
        <div class="speaker-img"><img src="./images/speakers/speaker_05.png" alt="speaker 5"></div>
        <div class="speaker-details">
          <h3>Laila Tretikov</h3>
          <h4>Wikimedia Foundation Executive Director</h4>
          <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>
          <p>Laila Tretikow is executive director of the Wikimedia Foundation, the nonprofit that runs Wikipedia. Wikipedia is available for free every month in 290 languages to more than 100 million people, nearly half of the world's population.</p>
        </div>
    </div>

    <div class="speaker-section-div">
        <div class="speaker-img"><img src="./images/speakers/speaker_06.png" alt="speaker 6"></div>
        <div class="speaker-details">
          <h3>Ryan Merkley</h3>
          <h4>CEO of Creative Commons, former COO of the Mozilla Foundation</h4>
          <div class="red-line"><img src="./images/main-program/red-line.jpg" alt="red line"></div>
          <p>He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. Open government, open source, and other open movements have been actively carried out.</p>
        </div>
    </div>
  </section>

  <button id="more-speakers">MORE&nbsp;&nbsp;<img src="./images/nav/arrow_down.png" alt="down icon"></button>
`;
const nodes = document.getElementsByTagName('article');
const lastNode = document.getElementsByTagName('article')[nodes.length - 1];
lastNode.parentNode.insertBefore(article, lastNode.nextSibling);
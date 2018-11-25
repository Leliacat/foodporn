window.onload = function(){

/***************************************************** MENU RESPONSIVE *************************************************/

const header_menu = document.getElementById('header_menu');
const header_icon = document.getElementById('header_icon');
const menu = document.getElementById('header_menu');


header_icon.addEventListener('click', ()=>{
    console.log('header_icon has been clicked');
    menu.classList.toggle('width_sidebar');
});

/***************************************************** PARTICLES JS *************************************************/

const src_1 = "./img/bubble_pink.png";
const src_2 = "./img/calinours.png";
const src_3 = "./img/eyeballll.png";

const params_particles =  {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 7000 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "image",
      polygon: { nb_sides: 5 },
      image: {
        src: src_1,
        width: 10,
        height: 10
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 50,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
};

update = function() {
  requestAnimationFrame(update);
};
requestAnimationFrame(update);


const switch_Img_Src = () => {
  let params_image;
  switch(params_particles.particles.shape.image.src){
    case src_1: 
    params_image = src_2;
      break;
    case src_2: 
    params_image = src_3;
      break;
    case src_3: 
    params_image = src_1;
      break;
    default: 
    params_image = src_2;
  }  
  params_particles.particles.shape.image.src = params_image;
  particlesJS("particles-js", params_particles); 
}

const footer_avatar_2 = document.getElementById('avatarfooter_2');
footer_avatar_2.addEventListener('click', switch_Img_Src);

particlesJS("particles-js", params_particles);

/***************************************************** hide and show *************************************************/

/********************** delay an element apearance on screen *******************/
const reactForever = document .getElementById('grid_item_3');
reactForever.style.transition = "all .3s";
const appear = () => {reactForever.style.opacity = '1';};
setTimeout(appear, 2500);


/********************** avatar footer (open and close eyes) *******************/

footer_avatar_2.addEventListener('click', () =>{
  footer_avatar_2.style.transition = "all .4s";
  footer_avatar_2.classList.toggle('hidden_image');
});

const profilePic = document.getElementById('profile_pic');
const leftEye = document.getElementById('eyeball1');
const rightEye = document.getElementById('eyeball2');

/*********************** hidden eyes in portrait (at top) **********************/

profilePic.addEventListener('mouseenter', () => {
    leftEye.style.transition = "all .3s";
    rightEye.style.transition = "all .3s";
    leftEye.classList.remove('hidden_eye');
    rightEye.classList.remove('hidden_eye');
});

profilePic.addEventListener('mouseout', () => {
  leftEye.style.transition = "all .2s";
  rightEye.style.transition = "all .2s";
  leftEye.classList.add('hidden_eye');
  rightEye.classList.add('hidden_eye');
});

/********************* switch profile pic (contact infos) ********************/

const photoSwitch = document.getElementById('ctnr_contact_photoSwitch');
const pictureOfMe = document.getElementById('pictureOfMe');
pictureOfMe.style.transition = "all .4s";

photoSwitch.addEventListener('click', ()=> {
  if(pictureOfMe.style.height == 0 || pictureOfMe.style.height == '0px'){
    pictureOfMe.style.height = '10rem';
    pictureOfMe.style.top = 0;
    pictureOfMe.style.left = 0;
    pictureOfMe.style.border = '6px double pink';
  }else if(pictureOfMe.style.height == '10rem') {
    pictureOfMe.style.height = 0;
    pictureOfMe.style.top = '5rem';
    pictureOfMe.style.left = '5rem';
    pictureOfMe.style.border = 'none';
  }
});





/***************************************************** navigation *************************************************/

let menu_items = document.getElementsByClassName('menu_item');
     
const menu_contact = menu_items[0];
const menu_skills = menu_items[1];
const menu_experience = menu_items[2];
const menu_education = menu_items[3];
const menu_about = menu_items[4];

 const section_contact = document.getElementById('contact');   
 const section_skills = document.getElementById('skills');
 const section_experience = document.getElementById('experience'); 
 const section_education = document.getElementById('education'); 
 const section_about = document.getElementById('about'); 

scrollIntoViewOptions = {behavior: 'smooth'};

menu_contact.addEventListener('click', ()=>{
  section_contact.scrollIntoView(scrollIntoViewOptions);
});

menu_skills.addEventListener('click', ()=>{
  section_skills.scrollIntoView(scrollIntoViewOptions);
});

menu_experience.addEventListener('click', ()=>{
  section_experience.scrollIntoView(scrollIntoViewOptions);
});

menu_education.addEventListener('click', ()=>{
  section_education.scrollIntoView(scrollIntoViewOptions);
});

menu_about.addEventListener('click', ()=>{
  section_about.scrollIntoView(scrollIntoViewOptions);
});


 

// method SCROLLINTOVIEW --> scrolls the element on which it's called into the visible area of the browser window.
// Element.scrollIntoView()
// Element.scrollIntoViewIfNeeded() 

// element.scrollIntoView();
// element.scrollIntoView(alignToTop); // Boolean parameter
// element.scrollIntoView(scrollIntoViewOptions); // Object parameter

// alignToTop (Optional)
// Is a Boolean value:
// If true, the top of the element will be aligned to the top of the visible area of the scrollable ancestor. 
// Corresponds to scrollIntoViewOptions: {block: "start", inline: "nearest"}. This is the default value.
// If false, the bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor. 
// Corresponds to scrollIntoViewOptions: {block: "end", inline: "nearest"}.

// scrollIntoViewOptions (Optional) 
// Is an Object with the following properties:
// behavior (Optional)
// Defines the transition animation.
// One of "auto", "instant", or "smooth". Defaults to "auto".
// block (Optional)
// Defines vertical alignment.
// One of "start", "center", "end", or "nearest". Defaults to "center".
// inline (Optional)
// Defines horizontal alignment.
// One of "start", "center", "end", or "nearest". Defaults to "nearest".



// WINDOW.SCROLL
// Fait glisser la fenêtre vers une position particulière du document
// window.scroll(x-coord,y-coord)
// x-coord est la position horizontale du pixel que vous voulez voir apparaitre en haut à gauche de l’écran.
// y-coord est la position verticale du pixel que vous voulez voir apparaitre en haut à gauche de l’écran

// Déplace la fenêtre 100px plus bas
//<button onClick="scroll(0, 100);">click to scroll down 100 pixels</button>

// window.scrollTo a un effet identique à cette méthode. 
// Pour se déplacer par pas dans la page, utilisez window.scrollBy. 
// Jetez aussi un œil à window.scrollByLines et window.scrollByPages.


/***************************************************** scroll stuff *************************************************/
// ONSCROLL EVENT
//object.addEventListener("scroll", myScript);











}
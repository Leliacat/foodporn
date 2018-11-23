window.onload = function(){

const header_menu = document.getElementById('header_menu');
const header_icon = document.getElementById('header_icon');
const menu = document.getElementById('header_menu');

header_icon.addEventListener('click', ()=>{
    console.log('arrête de me cliquer');
    menu.classList.toggle('width_sidebar');
});


particlesJS("particles-js", {
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
        src:
        "./img/carbare.png",
        //   "https://i.pinimg.com/originals/c2/a8/2b/c2a82b09550741f013a47c3edb75efa2.png",
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
});

update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);









}
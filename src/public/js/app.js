// particlesJS.load('header','particles.js-master/demo/particles.json')
particlesJS('header',
{
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "##FE0101"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  })

function abrirlogin(){
  document.getElementById("fondologin").style.display="flex";
  document.getElementById("fondologin").style.zIndex=100000;

}
function cerrarlogin(){
  document.getElementById("fondologin").style.display="none";
  document.getElementById("fondologin").style.zIndex=0;
}
function pasarlogin(){
  document.getElementById("spinsp").style.backgroundColor="#f9feff";
  document.getElementById("lginsp").style.backgroundColor="#FFFFFF";
  document.getElementById("lginsp").style.zIndex=10000000;
  document.getElementById("spinsp").style.zIndex=0;
  document.getElementById("lginsp").style.zIndex=1;
  document.getElementById("speoinsp").style.display="none";
  document.getElementById("logeoinsp").style.display="flex";
}
function pasarsignup(){
  document.getElementById("lginsp").style.backgroundColor="#f9feff";
  document.getElementById("spinsp").style.backgroundColor="#FFFFFF";
  document.getElementById("spinsp").style.zIndex=10000000;
  document.getElementById("lginsp").style.zIndex=0;
  document.getElementById("spinsp").style.zIndex=1;
  document.getElementById("logeoinsp").style.display="none";
  document.getElementById("speoinsp").style.display="flex";
  document.getElementById("contsp").style.display="none";
  document.getElementById("lginsp").style.display="block";
}
function continuesignup(){
  document.getElementById("speoinsp").style.display="none";
  document.getElementById("contsp").style.display="flex";
  document.getElementById("lginsp").style.display="none"; 
}
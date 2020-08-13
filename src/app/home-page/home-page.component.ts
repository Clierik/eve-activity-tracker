import { Component, OnInit } from '@angular/core';
import { particlesJS } from 'particles.js';

declare var particlesJS: any;
declare global { // TODO need better fix to solve "Property 'pJSDom' does not exist on type 'Window & typeof globalThis'.ts(2339)"
  interface Window {
    pJSDom:any;
  }
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { 
    // particlesJS('particles-js', '../assets/particlesjs-config.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
  }

  ngOnInit(): void {
    particlesJS("particles-js", {"particles":{"number":{"value":200,"density":{"enable":false,"value_area":800}},"color":{"value":"#11ece5"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":300,"color":"#11ece5","opacity":0.09620472365193136,"width":0},"move":{"enable":true,"speed":0.3,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
    let count_particles, update: any;
    count_particles = document.querySelector('.js-count-particles'); 
    update = function() { 
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
      } 
      requestAnimationFrame(update); 
    };
    requestAnimationFrame(update);
  }

}

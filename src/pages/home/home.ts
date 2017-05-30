import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('carousel') carousel: Slides;



  constructor(public navCtrl: NavController) {

  }


  slides = [
    {
      titulo: 'Slide 1',
      texto: 'lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu',
      imagen: '../../assets/img/1-freepik.jpg',

    },{
      titulo: 'Slide 2',
      texto: 'lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu',
      imagen: '../../assets/img/1-Up_for_Sonic_Runners.png',

    },{
      titulo: 'Slide 3',
      texto: 'lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu',
      imagen: '../../assets/img/images.png',

    }
  ]


  volver(){
    this.carousel.slideTo(0, 2000)
  }

  anterior(){
    this.carousel.slidePrev();
  }

  siguiente(){
    this.carousel.slideNext();
  }
}

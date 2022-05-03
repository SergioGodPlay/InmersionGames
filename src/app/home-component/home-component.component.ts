import { Component, ElementRef, OnInit, ViewChild, VERSION } from '@angular/core';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})

export class HomeComponentComponent implements OnInit {

  contador:number = 0;

  constructor() { 

    
    
  }

  ngOnInit(): void {

    //setInterval(this.moveRight, 3000);

  }


  

  moveRight(){

    const slider = document.querySelector("#slider");

    let sliderSection = document.querySelectorAll(".slider__section");

    //let sliderSectionLast = sliderSection[sliderSection.length - 1];

    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];

    slider?.insertAdjacentElement("beforeend", sliderSectionFirst);

  }

  moveLeft(){

    const slider = document.querySelector("#slider");

    let sliderSection = document.querySelectorAll(".slider__section");

    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    //let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];

    slider?.insertAdjacentElement("afterbegin", sliderSectionLast);

  }

}


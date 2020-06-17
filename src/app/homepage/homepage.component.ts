import { Component, OnInit } from '@angular/core';
import { Courses } from '../data/course-data';
declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  courses;
  step:number;
  counter = 0;
  updateRate = 10;
  constructor(private coursesData: Courses) { }

  ngOnInit(): void {
    this.step = 1;
    this.courses = this.coursesData.data;

    // let cards = document.querySelectorAll(".isotope-img-container");
    // console.log(cards);

}
  openDialog(){

  }
  closeDialog(){

  }
   onMouseEnterHandler = function () {
    var parent = this.parentElement.nodeName;
    console.log(parent);
    //mouse.setOrigin(this);
    this.openDialog();
  };
  
   onMouseLeaveHandler = function () {
    var innerItem = this.querySelector("._3d-hover__item");
    this.closeDialog();
  };
  
   onMouseMoveHandler = function (event, el) {
    var innerItem = this.querySelector("._3d-hover__item");
    if (this.isTimeToUpdate()) {
      this.openDialog();
    } 
  };
  
isTimeToUpdate = function () {
  // console.log(counter);
  return this.counter++ % this.updateRate === 0;
};

}

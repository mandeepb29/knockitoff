import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   var screenWidth = $(window).width();
   if(screenWidth < 1400){
    
   }
  }
  toggleSearch(){
    $(".search-box").toggleClass("show");
  }
}

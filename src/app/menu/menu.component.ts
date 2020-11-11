import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      var cont = 0;
      if(cont == 0){
        setTimeout(function() {
            $('.texto').delay(1000);
            $('.texto').fadeToggle(1000);
            $('.menu').hide();
            $('.titulo').hide();

        }, 0);
        setTimeout(function() {
            $('.menu').show();
            $('.titulo').show();
        }, 2000);
        cont++;
      }else{
        $('.texto').hide();
        $('.menu').show();
        $('.titulo').show();
      }
    });  
  }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  scrollCompleted;

  constructor() { }

  ngOnInit() {
  }

  slide(direction){
    var container = document.getElementById('container');
    this.scrollCompleted = 0;
    var slideVar = setInterval(function(){
        if(direction == 'left'){
            container.scrollLeft -= 10;
        } else {
            container.scrollLeft += 10;
        }
        this.scrollCompleted += 10;
        if(this.scrollCompleted >= 100){
            window.clearInterval(slideVar);
        }
    }, 50);
}

}

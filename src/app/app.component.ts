import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-app';
  paramValue = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramValue = window.location.href; 
    console.log(this.paramValue)
  }
  
}

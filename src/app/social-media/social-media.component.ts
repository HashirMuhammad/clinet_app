import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  isChecked: boolean[] = [false,false,false,false,false,false,false,false,false,false];
  clientTable = true;
  empTable = false;
  arcticleTable = false;
  filters = true;

  constructor(
    private route: Router,
  ){}

  toggleChecked(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    console.log(index,":",this.isChecked[index]);
  }

  clientTableToogle(){
    this.clientTable = !this.clientTable;
    this.empTable = false;
    this.arcticleTable = false;
    this.filters = true;
  }

  empToogle(){
    this.empTable = !this.empTable;
    this.clientTable = false;
    this.arcticleTable = false;
    this.filters = true;
  }

  arcticleToogle(){
    this.arcticleTable = !this.arcticleTable;
    this.empTable = false;
    this.clientTable = false;
    this.filters = !this.filters;
  }

  filterToogle(){
    this.filters = !this.filters;
  }

  // route
  routToConfig(){
    this.route.navigate(['social_media/configuration']);
  }
  routToNewPost(){
    this.route.navigate(['manage_articles/new_post']);
  }
}

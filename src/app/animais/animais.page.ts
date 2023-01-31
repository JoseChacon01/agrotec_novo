import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.page.html',
  styleUrls: ['./animais.page.scss'],
})
export class AnimaisPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addAnimais(){
    this.router.navigate(['add-animais']);
  }

}

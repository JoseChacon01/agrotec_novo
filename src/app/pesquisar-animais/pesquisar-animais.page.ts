import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{ Api } from './../../services/api';

@Component({
  selector: 'app-pesquisar-animais',
  templateUrl: './pesquisar-animais.page.html',
  styleUrls: ['./pesquisar-animais.page.scss'],
})
export class PesquisarAnimaisPage implements OnInit {

  constructor(
    private router:Router, 
    private provider: Api,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  AddAnimais(){
    this.router.navigate(['add-animais']);
  }


}

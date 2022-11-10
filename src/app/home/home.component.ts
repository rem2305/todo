import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title:string = "Todo List";
tasks:Array<any> = [
  {
    title: 'Chercher papa',
    date: new Date(),
    isDone: false,
    isModif: false
  },
  {
    title: 'Faire les courses',
    date: new Date(),
    isDone: false,
    isModif: false
  },
  {
    title: 'Allez au magasin',
    date: new Date(),
    isDone: false,
    isModif: false
  }

]
  constructor() { }

  ngOnInit(): void {
  }

// cette fonction permet de changer la valeur de la propriété "isDone" de chaque tâche
// Pas besoin de declarer le mot "function".
  onChangeStatus(arg:any){
    //pouvoir changer la valeur de chaque tache sur la propriété isDone
    console.log(arg);
    arg.isDone = !arg.isDone;
  }
  onHiddenStatus(arg:any){
    arg.isModif = !arg.isModif;
  }

}

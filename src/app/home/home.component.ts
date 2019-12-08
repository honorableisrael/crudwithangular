import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:String = 'Bravo';
  changeName = (name:String) =>{
    this.name = name;
  }
  persons:Array<Object>

  ngOnInit(){
    this.persons = [
      {
        name:'Hilary',
        dateOfBirth:'22/3/1999'
      },
      {
        name:'Hilary',
        dateOfBirth:'22/3/1999'
      },
      {
        name:'Hilary',
        dateOfBirth:'22/3/1999'
      }
  ]

  }
};

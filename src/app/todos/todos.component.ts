import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id:1,
        title:'Upload tools to server',
        completed:false
      },
      {
        id:1,
        title:'Change the date on the device',
        completed:false 
      }
    ]
  }

}

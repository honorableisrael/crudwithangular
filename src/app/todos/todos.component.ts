import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  visible:number=5
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res=>{
      this.todos = res.splice(0,this.visible)
    })
  }
  increaseTheVisible(){
    this.visible += 5 
    this.todoService.getTodos().subscribe(res=>{
      this.todos = res.splice(0,this.visible)
    })
   
  }

}

import { Component, OnInit,Input } from '@angular/core';
import { Todo } from 'src/models/todo';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {
  @Input() todo:Todo   //input is used as a decorator to pass property todo with type Todo into this todoitem component
  constructor() { }
  ngOnInit() {
    
  }
  //set dynamic classes
  setClass(){
    let classes  = {
      todo:true,
      "completed":this.todo.completed  //the style completed gets added to the template as long as this condition meets the todo prop above
    }
    return classes
  }
  onUserInput(todo){
        this.todo.completed = !this.todo.completed    // change to completed
  }
  onUserDelete(todo:object){
    const deletedItem = [todo].splice(1)
    // return this.todo = deletedItem;
  }
}

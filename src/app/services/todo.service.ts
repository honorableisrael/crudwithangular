import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Todo } from 'src/models/todo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http:HttpClient) {

  }
  getTodos():Observable<Todo[]>{    //this function is going to be returning a type observable
    return this.http.get<Todo[]>(this.todosUrl);
  }
}

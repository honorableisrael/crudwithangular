import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  appTitle: string
  appTitle1 = 'Porfolio1'
  dObject:object 
  signIn :string
 

  changeToLoggedIn = (user:object) :void =>{
    this.appTitle = "tony"
  }
 
 
  ngOnInit() {
    this.changeToLoggedIn({name:'Tony',class:'Senior School'})
  }

}

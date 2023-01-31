import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public dateAndHour: any = new Date();
  public paragraph: boolean = false;
  public arrayClickLogs: any[] = [];

  showParagraph(): any{
    //const dateAndHour: Date = new Date();
    this.paragraph = true;
    this.arrayClickLogs.push(new Date());
    console.log(this.arrayClickLogs)
  } 


  checkColor(): any{
       for (let index = 0; index < this.arrayClickLogs.length; index++) {
        index >= 5 ? 'lightblue' : 'green';
        
    }
  } 
}
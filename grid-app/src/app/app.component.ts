import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'grid-app';
  seatArrOne:string[] = [];
  seatArrTwo:string[] = [];
  seatNumber:string[] = [];
  isSelected:boolean[] = [];
  // seatnum:number=0;
  seatCategory:string[] = ["normal","infant","wheel-chair","special-meal"];
  constructor()
  {
      this.createSeats();
  }
  createSeats():void{
    let i = 0 ;
    
    for( i=1;i<=44;i++)
    {
      let seatContent = this.seatNumber.push(this.getContent(i));
      this.isSelected[i] = false;
    }
    for( i = 1;i<=44;i++)
    {
      let index = this.generateRandomNum();      
      this.seatArrOne.push(this.seatCategory[index]); 
    }

    for(let i=45;i<89;i++)
    {
      let seatContent = this.seatNumber.push(this.getContent(i));
      this.isSelected[i] = false; 
    }
    console.log(this.seatNumber);
    for(i = 45;i<89;i++)
    {
      let index = this.generateRandomNum();      
      this.seatArrTwo.push(this.seatCategory[index]);
    }
  }
  ngOnInit()
  {
    
  }
getContent(num:number):string{
 
  let ch = String.fromCharCode(65 + Math.floor((num-1) / 11) );
  if(num%11==0)
  {
    num = 11;
  }
  else{
    num = num%11;
  }
  return ch+'-'+num;
  }
  onButtonClick(inner:String,i){
    
       console.log(inner);
      //  this.isSelected[i] == true?this.isSelected[i]=false:this.isSelected[i]=true;
       this.isSelected[i] = !this.isSelected[i];
  }
generateRandomNum():number{
  return Math.floor(Math.random() * 4);//0-3
}  
}

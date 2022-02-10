import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  password= new FormGroup({});
  title = 'password generator';
  lowercase:string[]=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x','y', 'z'];
  uppercase:string[]=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X','Y', 'Z'];
  symbols:string[]=['/', '*', '#', '!', '&', '^', '$', '@', '%', '|', '>', '<', '_', '+', '=', '}', '{', '?'];
  numbers:string[]=['1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
  result: string= '';

  constructor() {
  }

  ngOnInit(): void {
    this.password = new FormGroup(
      {
        charNum: new FormControl(null),
        upCase: new FormControl(null),
        symbol: new FormControl(null),
        number: new FormControl(null),

      }
    );


  }

  generatePwd()
  {
    const upCase= this.password.value.upCase;
    const symbol= this.password.value.symbol;
    const numb= this.password.value.number;
    const num= this.password.value.charNum
    const final:string[]=[];
    console.log(upCase)
    if(upCase)
    {
      this.lowercase= this.lowercase.concat(this.uppercase)
    }
    else if(symbol)
    {
      this.lowercase= this.lowercase.concat(this.symbols)
    }
    else if(numb)
    {
      this.lowercase= this.lowercase.concat(this.numbers)
    }
    else if(upCase && symbol)
    {
      this.lowercase= this.lowercase.concat(this.uppercase, this.symbols)
    }
    else if (upCase && numb)
    {
      this.lowercase= this.lowercase.concat(this.uppercase,this.numbers)
    }
    else if ( numb && symbol)
    {
      this.lowercase= this.lowercase.concat(this.numbers,this.symbols)
    }
    else if (upCase && num && symbol)
    {
      this.lowercase= this.lowercase.concat(this.uppercase, this.numbers, this.symbols)
    }
    else{
      this.lowercase=this.lowercase;
    }

    for(let i=0; i < num; i++)
    {
      const res= this.lowercase[Math.floor(Math.random()*50)];
      console.log(res);
      final.push(res);
      // final.push(String.fromCharCode(res));
    }
    console.log(final.join(""))
    this.result= final.join("")
    return this.result;

  }
}

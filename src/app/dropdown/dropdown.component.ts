import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  public rawValue : any = 0;
  public rawValue1 : any = 0;
  public seperateRawSelector : boolean = false;
  public showDropdown : boolean = false;
  public asciiName : any;
   nameUpper : string = "";
   darkMode : boolean = false;
options = [
  {name : 'Action'},
  {name : 'Another action'},
  {name : 'Something else here'},
];

 options1 = [
  {name : 'Action', index : false},
  {name : 'Another action', index : false},
  {name : 'Something else here', index : false},
  {name : 'Separated link', index : false},
];
/*fnAscii(){
  let i = 0;
  for (i =0; i <this.options1[i].name.length ; i++);
  {
  
   this.asciiName[0] = this.options1[i].name.charCodeAt(i)
  }
}*/
fn(x : number) {
  this.rawValue = x;
  this.seperateRawSelector = false;
}
fn1(){
  this.rawValue = null;
this.seperateRawSelector = true;
}

fn2(){
  if(!this.showDropdown)
  {
    this.showDropdown = true;
  }
  else
  {
    this.showDropdown = false;
  }
console.log(this.options1[0].index)
}

fn4(x : number) {
  this.rawValue1 = x;
  this.showDropdown = false;
}

fn5()
{

  this.darkMode = !this.darkMode;
}
word : any[] = [];

onKey(event: any) {
  this.showDropdown = true;
 
 if (event.keyCode > 96 && event.keyCode < 123 ||  64 <event.keyCode  &&  91> event.keyCode || 32 == event.keyCode)
  {
    this.word.push(event.keyCode);
  }

  if (event.keyCode == 8)
  {
    this.word.pop();
    for (let i = 0; i < this.options1.length ; i++)
    {
      this.options1[i].index = false;
    }
   
  {}};

console.log(event);
console.log(this.word);
let i = 0;
let j = 0;
for ( i = 0; i < this.options1.length ; i++)
{
  let x = this.word.length;
  if(this.word.length >= this.options1[i].name.length)
  {
    x = this.options1[i].name.length;
  }
  for (let j = 0; j < x; j++)
  {
     const nameUpper  = this.options1[i].name[j].toUpperCase();
    if (this.word[j] != nameUpper.codePointAt(0))
    {
    
      this.options1[i].index = true; 
      
    }
         
}
if (!this.options1[i].index ){
  this.options1[i].index = false;
}
}
}
}


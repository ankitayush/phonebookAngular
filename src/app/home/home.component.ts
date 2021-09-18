import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }
  text:string|undefined;
  isAdd=false;
  isEdit=false;
  todisplay=false;
  phonebook:Contact[]=[];
  tempphonebook:Contact[]=[];

  deleteContact(index:any){
    this.phonebook.splice(index,1);

  }


  saveContact(prodForm:any){
    this.phonebook.push(prodForm.value);
    this.isAdd=false;

  }



  toggleClick(){
    console.log(this.isAdd);
    
    this.isAdd=!this.isAdd;
  }
 
  editContact(){

  }
  search(){
    this.todisplay=!this.todisplay;
    console.log(this.text);
    for(let i in this.phonebook){
      if(this.phonebook[i].firstname==this.text){
        this.tempphonebook.push(this.phonebook[i]);
        console.log(this.tempphonebook);
        

      }

      else{
        
      }
      

    }

    

  }

  sortUp(){

  }
  sortDown(){
    this.phonebook.sort();

  }

  ngOnInit(): void {
  }



}

import { Component, OnInit } from '@angular/core';
import{ DataService} from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean=false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.name="vidya";
    this.age=24;
    this.address={
      street:"5 Main",
      state:"abc",
      country:"xyz"
    }
    this.hobbies=["reading","dancing","writing"];

    this.dataService.getposts().subscribe((posts)=>{
      console.log(posts);
      this.posts=posts;
    });
  }
    onclick(){
      this.name="Monika";
      this.hobbies.push("new hobby");
    
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.push(hobby);
    return false;

  }

  deleteHobby(hobby){

   this.hobbies.splice(hobby,1);
  }
  toggleEdit(){
    this.isEdit=!this.isEdit;
  }

}

interface Address{
  
    street:string,
    state:string,
    country:string
  
}

interface Post{
  id:number,
  title:string,
  body:string,
  userid:number
}

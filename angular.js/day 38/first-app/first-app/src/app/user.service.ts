import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray : any[]=[]
  constructor() { }

  public getUser():any[]{
    return this.userArray;
  }

  public save(obj:any): void{
    let b=this.userArray.length;
    let a=b+1
    let object={profileId:a,name:obj.name,gender:obj.gender,phoneNo:obj.phoneNo,emailId:obj.emailId,address:{state:obj.address.state,city:obj.address.city,pin:obj.address.pin}}
    this.userArray.push(object);
  }

  public delete(id:number): void{
    for(let i =0; i< this.userArray.length; i++){
      let user=this.userArray[i];
      if(user.profileId==id){
        this.userArray.splice(i,1);
      }
    }
  }

  public update(id:number):any{
    for(let i=0; i< this.userArray.length; i++){
      let user=this.userArray[i];
      if(user.profileId==id){
        return this.userArray[i];
      }
    }
  }

  public updateform(obj:any):void{
    for(let i=0; i< this.userArray.length; i++){
      let user=this.userArray[i];
      if(user.profileId==obj.id){
        user.name=obj.name;
        user.gender=obj.gender;
        user.phoneNo=obj.phoneNo;
        user.emailId=obj.emailId;
        user.address.state=obj.address.state;
        user.address.city=obj.address.city;
        user.address.pin=obj.address.pin;
        console.log('hi')
      }
    }
  }
}

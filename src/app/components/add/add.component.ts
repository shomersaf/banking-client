import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAccount } from 'src/app/models/models';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  today  = new Date().toLocaleString();
  actionPayload:any;
  selectedOption: string = "";

  addAction(newAction: any){
    if (
      newAction.accNumber &&
      newAction.type &&
      newAction.amount
    ){
      if(newAction.type =="deposit"){
        this.actionPayload={
          "accNumber": newAction.accNumber,
        "type": {
        "deposit": {
          "amount": newAction.amount,
          "date": this.today.toString()
        },
        "withdraw": {
          "amount": 0,
          "date": ""
        },
        "loan": {
          "amount":0,
          "interest": 0,
          "payments":0,
          "date": ""
        }
        }
        }
      }else if(newAction.type =="withdraw"){
        this.actionPayload={
          "accNumber": newAction.accNumber,
        "type": {
        "deposit": {
          "amount": 0,
          "date": ""
        },
        "withdraw": {
          "amount": newAction.amount,
          "date": this.today.toString()
        },
        "loan": {
          "amount":0,
          "interest": 0,
          "payments":0,
          "date": ""
        }
        }
        }
      }else if(newAction.type =="loan" && newAction.interest && newAction.payments ){
        this.actionPayload={
          "accNumber": newAction.accNumber,
        "type": {
        "deposit": {
          "amount": 0,
          "date": ""
        },
        "withdraw": {
          "amount":0,
          "date": ""
        },
        "loan": {
          "amount": newAction.amount,
          "interest": 0,
          "payments":0,
          "date": this.today.toString()
        }
        }
        }
      }else{
        alert("interest and payments are required!")
        return
      }
  
      this.accountsService.addAction(this.actionPayload).subscribe((accounts) => {
        console.log(accounts)
        alert(`The Account Action is successfully added`);
        window.location.href = '/';
      });
    }else{
   alert("Some data not entered")
    }

  }
  changeWebsite(event: any){
    console.log(event.target.value);
    this.selectedOption = event.target.value;
  }
  isLoanSelected(){
    if (this.selectedOption == "loan") {
      return "block"
    }
    else {
      return "none"
    }
  }
  constructor(
    public accountsService: AccountsService,
    // private router: Router
  ) {}
}

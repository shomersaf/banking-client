import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';
import {IAccount} from  'src/app/models/models';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  title = 'Accounts';
  newAccounts:IAccount[]=[]
  accounts:IAccount[]=[];
  loading=false;

  searchByAccNumFn(searchByAccNum:string){
    this.loading=true
    if(searchByAccNum){
    this.accountsService.searchByAccNum(searchByAccNum).subscribe( accounts =>{
      if(accounts){
        this.newAccounts=[]
    // this.newAccounts.push(accounts)
    this.newAccounts=[...Object.values(accounts)]   
      }else {
      this.accounts = []
      }
      this.loading = false
    })}else alert("nothing entered!")
  }

  getAll(){
    this.loading=true
    this.accountsService.getAccounts().subscribe(accounts=>{
      if(accounts){
        this.newAccounts = accounts
        console.log(this.newAccounts)
      }else{
        this.newAccounts=[]
      }
      this.loading = false
    })
  }

  ngOnInit(): void {
    this.loading=true
    this.accountsService.getAccounts().subscribe(accounts=>{
      if(accounts){
        this.newAccounts = accounts
        console.log(this.newAccounts)
      }else{
        this.newAccounts=[]
      }
      this.loading = false
    })
  }


  constructor(public accountsService: AccountsService){}
}

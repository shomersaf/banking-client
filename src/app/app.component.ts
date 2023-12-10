import { Component, OnInit } from '@angular/core';
// import { ICar } from './models/models';
// import { VehiclesService } from './services/vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Vehicles';
  // cars:ICar[]=[]

  constructor(
    // private vehiclesService:VehiclesService
    ){

  }

  ngOnInit():void{
    // this.vehiclesService.getCars().subscribe( vehicles =>{
    //   console.log(vehicles)
    //   this.cars = vehicles
    // })
  }
}

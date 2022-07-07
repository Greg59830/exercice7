import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  servers: Server[] = [
    {
      name: "Development Server",
      size: 1,
      startingDate: new Date(2018, 3, 14),
      stability: "offline"
    },
    {
      name: "Database",
      size: 3,
      startingDate: new Date(2020, 9, 27),
      stability: "stable"
    },
    {
      name: "Test Server",
      size: 1,
      startingDate: new Date(2019, 6, 15),
      stability: "offline"
    },
    {
      name: "Production Server",
      size: 2,
      startingDate: new Date(2018, 5, 20),
      stability: "stable"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

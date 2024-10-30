import { Component, OnInit } from '@angular/core';
import {data} from '../../Data/data'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataArray:any = data
  constructor( ) { }

  ngOnInit(): void {

  }

}


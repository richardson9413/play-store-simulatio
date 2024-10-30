import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {data} from '../../Data/data'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public game:any;
  public gameSmall:any = data

  constructor(
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get("id")
    this.game = data.find(game => game.id === id)
    console.log(this.game)
  }
 onGameSlected(selectedGame:any){
   this.game = selectedGame;
 }
 goToBuayPage(gameid:number){
  this.router.navigate(['buy-page',gameid]);
 }
}

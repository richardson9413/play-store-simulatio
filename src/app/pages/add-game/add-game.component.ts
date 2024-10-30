import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/app/Data/data';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  public newGame: any = {
    id: '',
    name: '',
    description: '',
    gamePrice: null,
    carCover: '',
    gametype: '',
    gameLabel: ''
  };
public message:string = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addGame(): void{
    const newId = (data.length + 1).toString(); // gera um novo id para o jogo
    this.newGame.id = newId;
    data.push(this.newGame); // adiciona o novo jogo ao banco de dados.
    this.message= 'Jogo adicionado com sucesso!';
    this.newGame= {
      id: '',
      name: '',
      description: '',
      gamePrice: null,
      carCover: '',
      gametype: '',
      gameLabel: ''
    }; // limpa o formulario
  }
}

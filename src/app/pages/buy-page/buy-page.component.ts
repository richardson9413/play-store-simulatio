import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{data} from "src/app/Data/data"

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
  game:any;
  public selectedPaymentMethod: string = 'card'; // Default para Pix
  public selectedInstallment: number = 1; // Default para 1 parcela
  public installments: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Opções de parcelas
  public installmentValue: number = 0; // Valor de cada parcela
  public totalWithInterest: number = 0; // Valor total com juros
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.game = data.find(game => game.id === id)
  }
  calculateInstallment(): void {
    const price = this.game.gamePrice;
    if(this.selectedInstallment > 1 ){
      const interestrate = 0.10; // juros 10%
      const totalWithInterest = price + (price * interestrate); // calcular o juros e sommar
      this.totalWithInterest= totalWithInterest; // armazena o total com juros
      this. installmentValue = totalWithInterest / this.selectedInstallment; // divi pelo numero de parcelas
    } else{
      this.installmentValue = price; // pagamento avista sem juros
      this.totalWithInterest = price;
    }
  }
}

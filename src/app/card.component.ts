import { Component } from "@angular/core";
import { Card } from "./card.blueprint";

@Component({
  selector: "app-card",
  styleUrls: ["./card.component.css"],
  templateUrl: "./card.component.html"
})
export class CardComponent {
  public card = new Card({
   
  });
}

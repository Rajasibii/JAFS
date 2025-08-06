import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./button.html",
  styleUrl: "./button.css",
})
export class Button {
  @Input("size")
  size = "S"; //S,M,L

  @Input("shade")
  shade = "NA"; //D,L,W,NA
  
  @Input("animation")
  animation = "F"; //C,F
  
    @Input("name")
    name = " "; //C,F
}

import { Component, Input } from '@angular/core';

export interface CardItem
{
  id: number,
  type?: Object,
  title: string,
  subtitle?: string,
  content: string,
  imageUrl?: string,
  buttons?:
  {
    label: string,
    severity?: "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast" | null,
    icon?: string,
    action: () => void
  }[]

}

@Component({
  selector: 'app-panel-card',
  standalone: false,
  templateUrl: './panel-card.component.html',
  styleUrl: './panel-card.component.scss'
})
export class PanelCardComponent {
  @Input() cardItem: CardItem;


}

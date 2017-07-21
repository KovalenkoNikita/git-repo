import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.css']
})
export class FooterLinksComponent {
  @Input() linkList: any[];
}

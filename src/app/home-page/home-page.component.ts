import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  messageService: MessageService;
  inputText: string;
  constructor(
    // private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  values = '';
  onKey(event: KeyboardEvent) {
    // with type info
    this.values = (event.target as HTMLInputElement).value + '';
  }
 
  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: this.inputText,
    });
  }
}

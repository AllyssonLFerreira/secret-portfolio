import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  @Input() intervalId!: number;
  @Input() txt: string[] = [];
  @Input() shuffledTxt: string[] | undefined = [];

  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.startUpdatingScreen();
  }

  startUpdatingScreen() {
    this.intervalId = window.setInterval( () => {
      this.shuffleText();
    }, 400)
  }

  shuffleText() {
    if (this.txt && this.txt.length > 0) {
      this.txt.push(this.txt.shift() || '');
      this.shuffledTxt = [...this.txt];
    }
  }
}

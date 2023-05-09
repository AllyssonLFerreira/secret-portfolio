import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnInit {
  
  spinnerFrames: any = ["/", "-", "\\", "|"];

  ngOnInit() {
    this.drawSpinner();
  }

  drawSpinner() {
    let spinnerFrame = 0;
    setInterval(() => {
      spinnerFrame += 1;
      const spinners = document.querySelectorAll(".spinner");
      spinners.forEach(spinner => {
        const spinnerText = document.createTextNode(`[${
          this.spinnerFrames[spinnerFrame % this.spinnerFrames.length]
        }]`);
        spinner.textContent = '';
        spinner.appendChild(spinnerText);
      });
    }, this.randomNumber(50, 300));
  }

  randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

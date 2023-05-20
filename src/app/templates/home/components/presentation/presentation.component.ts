import { AfterViewInit, Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements AfterViewInit {

  tables = [
    {
      title: 'target data',
      img: '/assets/img/presentation.jpeg',
      tr: [
        {description: 'TARGET', value: "Allysson Lima Ferreira"},
        {description: 'PROFESSION', value: "Software Engineer"},
        {description: 'LOCATION', value: "Brazil, RS"},
        {description: 'AGE', value: "27"},
        {description: 'SEX', value: "Male"},
        {description: "CHILDREN", value: "Two Cats"},
      ]
    },
  ]
  constructor( private _HTTP: HttpClient) {

   }

  ngAfterViewInit(): void {
    const typewriterElements = document.querySelectorAll('.typewriter');
    const typewriterArray = Array.from(typewriterElements) as HTMLElement[];

    for (const elm of typewriterArray) {
      const text = elm.innerText;

      // clear text
      elm.innerText = '';

      let i = 0;

      const t = setInterval(() => {
        elm.innerText = text.substr(0, i);

        i++;

        if (i > text.length) {
          clearInterval(t);
        }
      }, 20);
    }
  }


  downloadPDF(): void {
    this._HTTP
      .get('assets/pdf/allysson-ferreira.pdf', {responseType: 'blob'})
      .subscribe((response: any) => {
        const blob = new Blob([response], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download =  'allysson-ferreira.pdf';
        link.click();
      })
  }

}







import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {

constructor( public _DIALOG: MatDialogRef<NetworkComponent>) {

}

  network = [
    {
      path: 'https://t.me/Allysson_LFerreira',
      src: 'assets/icons/icon-telegram.svg',
      alt: 'Telegram'
    },
    {
      path: 'https://github.com/AllyssonLFerreira',
      src: 'assets/icons/icons-github.svg',
      alt: 'GitHub'
    },
    {
      path: 'https://www.linkedin.com/in/allyssonferreira/',
      src: 'assets/icons/icons-linkedin.svg',
      alt: 'Linkedin'
    }
  ]

  closeModal() {
    this._DIALOG.close()
  }
}

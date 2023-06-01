import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.html',
  styleUrls: ['./scanner.scss']
})
export class ScannerComponent implements AfterViewInit{
  @ViewChild('scanline') scanlineRef!: ElementRef;
  tiles: { active: boolean }[] = [];

  constructor(private renderer: Renderer2,
              private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.tiles = Array.from({ length: 10 }, () => ({ active: false }));
    setTimeout(() => {
      this.toggleRun();
      this.cdr.detectChanges();
    }, 0);
    setInterval(() => this.toggleRun(), 4000);
  }

  toggleActive(event: any) {
    const tile = event.target;
    tile.classList.toggle('active');
  }

  toggleRun() {
    const scanline = this.scanlineRef.nativeElement;
    this.renderer.addClass(scanline, 'run');
    setTimeout(() => {
      this.renderer.removeClass(scanline, 'run');
      this.cdr.detectChanges();
    }, 1200);
  }
}

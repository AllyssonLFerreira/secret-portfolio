import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  terminal!: HTMLElement | null;
  sysRec!: HTMLElement | null;
  rebootSuccessText!: HTMLElement | null;
  maxCharacters!: number;
  unloadedCharacter!: string;
  loadedCharacter!: string;
  loadingBars!: NodeListOf<Element>;
  processAmounts!: NodeListOf<Element>;
  rebootingText!: NodeListOf<Element>;
  glitches!: NodeListOf<Element>;
  loadingPercent!: number;
  hasAnimationPlayed: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.terminal = document.querySelector(".terminal");
    this.sysRec = document.querySelector(".sys-rec");
    this.rebootSuccessText = document.querySelector(".sys-rec_reboot_success");
    this.maxCharacters = 24;
    this.unloadedCharacter = ".";
    this.loadedCharacter = "#";

    // Clone the element and give the glitch classes
    (glitchElement => {
      const glitch = glitchElement!.cloneNode(true) as HTMLElement;
      const glitchReverse = glitchElement!.cloneNode(true) as HTMLElement;
      glitch.classList.add("glitch--clone", "glitch--bottom");
      glitchReverse.classList.add("glitch--clone", "glitch--top");
      glitch.setAttribute("aria-hidden", "true");
      glitchReverse.setAttribute("aria-hidden", "true");

      glitchElement!.insertAdjacentElement("afterend", glitch);
      glitchElement!.insertAdjacentElement("afterend", glitchReverse);
    })(this.terminal);

    // Get all the loading bars
    this.loadingBars = document.querySelectorAll(".loading-bar");
    this.processAmounts = document.querySelectorAll(".process-amount");
    this.rebootingText = document.querySelectorAll(".sys-rec_rebooting");
    this.glitches = document.querySelectorAll(".glitch--clone");

    this.playSysRec();

  }

  private HideAll(elements: NodeListOf<Element>[]) {
    elements.forEach(glitchGroup =>
      glitchGroup.forEach(element => element.classList.add("hidden"))
    );
  }

  private ShowAll(elements: NodeListOf<Element>[]) {
    elements.forEach(glitchGroup =>
      glitchGroup.forEach(element => element.classList.remove("hidden"))
    );
  }

  private RenderBar(values: string[]) {
    const currentLoaded = values.lastIndexOf(this.loadedCharacter) + 1;
    const loaded = values.slice(0, currentLoaded).join("");
    const unloaded = values.slice(currentLoaded).join("");

    // Update all the loading bars
    this.loadingBars.forEach(loadingBar => {
      loadingBar.innerHTML = `(${loaded}<span class="loading-bar--unloaded">${unloaded}</span>)`;
    });

    // Update all the percentages
    this.loadingPercent = Math.floor((currentLoaded / this.maxCharacters) * 100);
    this.processAmounts.forEach(processAmount => {
      processAmount.textContent = this.loadingPercent.toString();
    });
  }

  private async DrawLoadingBar(values: string[]) {
    return new Promise<void>(resolve => {
      const loadingBarAnimation = setInterval(() => {
        if (!values.includes(this.unloadedCharacter)) {
          clearInterval(loadingBarAnimation);
          resolve();
        }

        values.pop();
        values.unshift(this.loadedCharacter);
        this.RenderBar(values);
      }, this.RandomNumber(50, 300));
    });
  }

  private RandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private AnimateBox() {
    const first = this.sysRec!.getBoundingClientRect();
    this.HideAll([ this.glitches, this.rebootingText]);
    this.rebootSuccessText!.classList.remove("hidden");
    this.rebootSuccessText!.style.visibility = "hidden";
    const last = this.sysRec!.getBoundingClientRect();

    const sysRecAnimation = this.sysRec!.animate(
      [
        { transform: `scale(${first.width / last.width}, ${first.height / last.height})` },
        { transform: `scale(${first.width / last.width}, 1.2)` },
        { transform: "none" }
      ],
      {
        duration: 1700,
        easing: "cubic-bezier(0,0,0.32,1)"
      }
    );

    sysRecAnimation.addEventListener("finish", () => {
      this.rebootSuccessText!.removeAttribute("style");
      this.sysRec!.removeAttribute("style");
    });
  }

  playSysRec(): any {
    if (this.hasAnimationPlayed) {
      return;
    }
    this.terminal!.classList.add("glitch");
    this.rebootSuccessText!.classList.add("hidden");
    this.ShowAll([ this.glitches, this.rebootingText]);
    const loadingBar = new Array(this.maxCharacters).fill(this.unloadedCharacter);

    // Play the loading bar
    this.DrawLoadingBar(loadingBar)
      .then(() => {
        // Loading is complete on the next frame, hide spinner and glitch
        requestAnimationFrame(() => {
          this.terminal!.classList.remove("glitch");
          this.terminal!.classList.remove('scanline');
          this.AnimateBox();
          setTimeout(() =>{
            this.hasAnimationPlayed = true;
          }, 5000 );
        });
      });
  }

}

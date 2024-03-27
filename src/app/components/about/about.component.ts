import { Component, Inject, OnInit, PLATFORM_ID  } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import AOS from "aos";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimateOnScrollModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
    ngOnInit() {
      if (isPlatformBrowser(this.platformId)) { AOS.init({ once: true, duration: 1000 }); }
    }
}
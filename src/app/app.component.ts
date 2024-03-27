import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AboutComponent, AnimateOnScrollModule]
})
export class AppComponent {
  title = 'test_17';
}

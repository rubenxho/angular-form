import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { TemplateComponent } from './component/template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ReactiveComponent, TemplateComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms';
}

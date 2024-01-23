import { Routes } from '@angular/router';
import { TemplateComponent } from './component/template/template.component';
import { ReactiveComponent } from './component/reactive/reactive.component';

export const routes: Routes = [
  {path: "", redirectTo: "/template", pathMatch: "full"},
  {path: "template", component: TemplateComponent},
  {path: "reactive", component: ReactiveComponent},
];

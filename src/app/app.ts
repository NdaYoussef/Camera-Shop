import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './models/models';
import { HeaderComponent } from "./header/header";
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent, HeaderComponent,HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}

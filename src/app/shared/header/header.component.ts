import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatIconModule, AsyncPipe]
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
}

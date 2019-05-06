import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent {
  @ViewChild('drawer') drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  scroll(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    /**
     *     this.isHandset$.subscribe((data) => {

      if (data) {

        this.drawer.close();
      }
    });
     */
  }




}

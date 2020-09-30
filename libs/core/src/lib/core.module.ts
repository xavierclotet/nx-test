import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { FancyButtonComponent } from './fancy-button/fancy-button.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [FancyButtonComponent],
  entryComponents: [FancyButtonComponent],
  exports: [FancyButtonComponent]
})
export class CoreModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    let component;
    component = createCustomElement(FancyButtonComponent, { injector: this.injector});
    customElements.define('ui-fancy-button', component);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './Components/header-page/header-page.component';
import { FooterPageComponent } from './Components/footer-page/footer-page.component';
import { SliderContainerComponent } from './Components/Slider/slider-container/slider-container.component';
import { SlideActiveComponent } from './Components/Slider/slide-active/slide-active.component';
import { SlideListComponent } from './Components/Slider/slide-list/slide-list.component';
import { SlidePreviewComponent } from './Components/Slider/slide-preview/slide-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPageComponent,
    SliderContainerComponent,
    SlideActiveComponent,
    SlideListComponent,
    SlidePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

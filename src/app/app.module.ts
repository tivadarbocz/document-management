import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DocumentViewerComponent } from './component/document-viewer/document-viewer.component';
import { ExamplePdfComponent } from './component/example-pdf/example-pdf.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { AppRoutingModule }     from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { DocumentComponent } from './component/document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentViewerComponent,
    ExamplePdfComponent,
    PdfViewerComponent,
    HomeComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

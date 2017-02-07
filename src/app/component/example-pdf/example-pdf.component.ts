import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-pdf',
  templateUrl: './example-pdf.component.html',
  styleUrls: ['./example-pdf.component.css']
})
export class ExamplePdfComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  pdfSrc:string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  page:number = 1;
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-request-details',
  templateUrl: './quote-request-details.component.html',
  styleUrls: ['./quote-request-details.component.less']
})
export class QuoteRequestDetailsComponent implements OnInit {

  id : number =0;
  constructor(private route: ActivatedRoute) { 

    this.route.params.subscribe( params =>
       this.id = params.id
      );
  }

  ngOnInit(): void {
    console.log(this.id);
  }

}

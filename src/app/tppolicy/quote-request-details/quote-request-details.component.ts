import { ActivatedRoute, Router } from '@angular/router';
import { QuoterequestService } from '@app/_services/quoterequest.service';
import {ChangeDetectionStrategy, Component, inject,OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PaymentlinkAddComponent } from '../paymentlink-add/paymentlink-add.component';

@Component({
  selector: 'app-quote-request-details',
  templateUrl: './quote-request-details.component.html',
  styleUrls: ['./quote-request-details.component.less'],
})
export class QuoteRequestDetailsComponent implements OnInit {

  quoteRequestId : number =0;
  quoteRequestData: any;
  constructor(private route: ActivatedRoute,private quoterequestService: QuoterequestService,private router: Router) { 

    this.route.params.subscribe( params =>
       this.quoteRequestId = params.id
      );
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(PaymentlinkAddComponent , {
      data: {
        id: this.quoteRequestId
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTpQuoteRequestDetails();
    });
  }

  ngOnInit(): void {
    console.log(this.quoteRequestId);
    this.getTpQuoteRequestDetails();
  }

  getTpQuoteRequestDetails() {

    this.quoterequestService.getRequestedQuotationById(1,this.quoteRequestId).subscribe(res => {
      this.quoteRequestData = res;
      console.log(this.quoteRequestData);
    })
  }

}

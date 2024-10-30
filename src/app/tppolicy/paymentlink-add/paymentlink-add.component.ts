import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PaymentLink } from '@app/_models/TPRequestQuotationModel';
import { QuoterequestService } from '@app/_services/quoterequest.service';

@Component({
  selector: 'app-paymentlink-add',
  templateUrl: './paymentlink-add.component.html',
  styleUrls: ['./paymentlink-add.component.less'],
})
export class PaymentlinkAddComponent implements OnInit {

  quoteRequestId : number = 0;
  data = inject(MAT_DIALOG_DATA);
  paymentForm : FormGroup;
  todayDate: Date | null;
  constructor(private fb : FormBuilder,private route: ActivatedRoute,private quoterequestService: QuoterequestService ) { 
this.paymentForm = fb.group({
  paymentLink: ['',Validators.required],
  expiryDate: ['', Validators.required],
  paymentStatus: [''],
  comments:['']
})
this.todayDate = new Date();
  }

  ngOnInit(): void {
    this.quoteRequestId = Number(this.data.id);
  }

  Submit() {
    if (this.paymentForm.valid) {

      console.log(this.paymentForm)
      let pObj : PaymentLink =
      {
        paymentLinkId: 0,
        agentCompanyId: 1,
        userId: 1,
        tpRequestId: this.quoteRequestId,
        paymentLink1: this.paymentForm.value.paymentLink,
        paymentStatus: this.paymentForm.value.paymentStatus,
        expiredDate: this.paymentForm.value.expiryDate,
        comments: this.paymentForm.value.comments,
        isDeleted: false,
        createdBy: 1,
        createdDate: this.todayDate,
        modifiedBy: 1,
        modifiedDate: this.todayDate,
        
      }
      this.quoterequestService.addPaymentLink(pObj).subscribe(s =>{
        console.log(s);
      })
    }
  }

}



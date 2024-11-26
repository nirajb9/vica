import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OfflinePolicyBuyRequest } from '@app/_models/OfflinePolicyModel';
import { OfflinepolicyService } from '@app/_services/offlinepolicy.service';

@Component({
  selector: 'app-offlinepolicypaymentlink-add',
  templateUrl: './offlinepolicypaymentlink-add.component.html',
  styleUrls: ['./offlinepolicypaymentlink-add.component.less']
})
export class OfflinepolicypaymentlinkAddComponent implements OnInit {

  offlinePolicyBuyId : number = 0;
  userid : number = 0;
  requestData : any;
  offlinePolicyForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private offlinepolicyService: OfflinepolicyService) {

    this.offlinePolicyForm = this.fb.group({  
      paymentLink: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['', Validators.required]
    });
    this.route.paramMap.subscribe(params => {
      this.offlinePolicyBuyId = Number(params.get('id'));
      this.userid = Number(params.get('userid'));
  });
   }

  ngOnInit(): void {
    const storedData = localStorage.getItem('offlinerequestdata');
    if (storedData) {
      this.requestData = JSON.parse(storedData);
      console.log(this.requestData);
    }
  }
  AddPaymentLink() {
    if (this.offlinePolicyForm.valid) {

      let offlineObj : OfflinePolicyBuyRequest =
      {
        offlinePolicyBuyRequestId: this.offlinePolicyBuyId,
        offlineQuotationId: null,
        userId: this.userid,
        agentCompanyId: null,
        rcFUrlm: null,
        rcBUrlm: null,
        aadharFUrlm: null,
        aadharBUrlm: null,
        panFUrlm: null,
        panBUrlm: null,
        quotation: null,
        remark: this.offlinePolicyForm.value.remark,
        paymentLink: this.offlinePolicyForm.value.paymentLink,
        status: this.offlinePolicyForm.value.status,
        vehicleNo: null,
        isDeleted: false,
        createdBy: null,
        createdDate: null,
        modifiedBy: 1,
        modifiedDate: null,
      
      }
      
     this.offlinepolicyService.UpdateOfflinePolicyBuyRequest(offlineObj).subscribe(result => {         
      alert('SUCCESS!! Data saved sucessfully!');
      this.requestData.paymentLink = this.offlinePolicyForm.value.paymentLink,
      this.requestData.remark = this.offlinePolicyForm.value.remark,
      this.requestData.status = this.offlinePolicyForm.value.status
     });
   }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { PolicyCashback } from '@app/_models/PolicyCashback';
import { CashbackService } from '@app/_services/cashback.service';
import { CommonService } from '@app/_services/common.service';
import { FormsModule } from '@angular/forms';
import { EndorsementPolicy } from '@app/_models/EndorsementModel';
import { EndorsementService } from '@app/_services/endorsement.service';

@Component({
  selector: 'app-addendorsement',
  templateUrl: './addendorsement.component.html',
  styleUrls: ['./addendorsement.component.less']
})
export class AddendorsementComponent implements OnInit {

     todayDate: Date | null;
     endorsementId: number = 0;
     userid: number = 0;
     PolicyCopyNew: string | null = null;
     fileNamePolicyCopyNew: string | null = null;
     requestData: any;
     comments: any;
     status: any;

    displayedColumns: string[] = ['userName', 'vehicleNo', 'cashbackAmount', 'premimumAmount', 'transactionDetails', 'transactionProof1', 'transactionProof2', 'status'];
    gridData: any;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private commonService: CommonService, private endorsementService: EndorsementService) {
     
      this.todayDate = new Date();
      this.route.paramMap.subscribe(params => {
        this.endorsementId = Number(params.get('endorsementId'));
        this.userid = Number(params.get('userId'));
      });
    }
   
    ngOnInit() {
      const storedData = localStorage.getItem('requestdataEndorsement');
      console.log(storedData);
      if (storedData) {
        this.requestData = JSON.parse(storedData);
        console.log(this.requestData);
      }
  
      //this.getCashbackDetails();
    }
  
    SaveData() {

      let endObj: EndorsementPolicy =
      {
        endorsementId: this.requestData.endorsementId,
        userId: this.requestData.userId,
        policycopy: null,
        policycopyFinal: (this.PolicyCopyNew == null || this.PolicyCopyNew == "") ? "" : this.PolicyCopyNew.split(',')[1],
        endorsementType: this.fileNamePolicyCopyNew,
        rcF: null,
        rcB: null,
        kyc1: null,
        kyc2:  null,
        kyc3:  null,
        kyc4:  null,
        status: this.status,
        comments: this.comments,
        isDeleted: null,
        createdBy: null,
        createdDate: null,
        modifiedBy: null,
        modifiedDate: null
      }

      this.endorsementService.UpdateEndrosmentPolicy(endObj).subscribe(res =>{
        console.log(res);
      });
    }
    // getCashbackDetails() {
    //   this.cashbackService.GetPolicyCashbackDetails(this.requestData.policyCashbackRequestId).subscribe(result => {
    //     this.gridData = result;
    //     console.log(result);
    //   });
    // }
  
    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];       
        const reader = new FileReader();
        reader.onload = () => {        
            this.fileNamePolicyCopyNew = file.name;
            this.PolicyCopyNew = reader.result as string;         
        };
        reader.readAsDataURL(file);
      }
    }

}

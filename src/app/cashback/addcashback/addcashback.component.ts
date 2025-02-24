import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { OfflineQuotationRequestDetail } from '@app/_models/OfflinePolicyModel';
import { PolicyCashback } from '@app/_models/PolicyCashback';
import { CashbackService } from '@app/_services/cashback.service';
import { CommonService } from '@app/_services/common.service';
import { OfflinepolicyService } from '@app/_services/offlinepolicy.service';

@Component({
  selector: 'app-addcashback',
  templateUrl: './addcashback.component.html',
  styleUrls: ['./addcashback.component.less']
})
export class AddcashbackComponent implements OnInit {

  cashbackForm: FormGroup;
  todayDate: Date | null;
  offlineQuotationId: number = 0;
  insuranceCompanyList: any;
  insuranceCompanyId: number = 0;
  insuranceCompanyName: string = "";
  userid: number = 0;
  Proof1: string | null = null;
  Proof2: string | null = null;
  fileNameProof1: string | null = null;
  fileNameProof2: string | null = null;
  cashbackDetailsList: any;
  requestData: any;

  displayedColumns: string[] = ['userName', 'vehicleNo', 'cashbackAmount', 'premimumAmount', 'transactionDetails', 'transactionProof1', 'transactionProof2', 'status'];
  gridData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private commonService: CommonService, private cashbackService: CashbackService) {
    this.cashbackForm = this.fb.group({
      premiumAmount: ['', Validators.required],
      payoutAmount: ['', Validators.required],
      transactionID: ['', Validators.required],
      status: ['', Validators.required],

    });


    this.todayDate = new Date();
    this.route.paramMap.subscribe(params => {
      this.offlineQuotationId = Number(params.get('id'));
      this.userid = Number(params.get('userid'));
    });
  }
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  AddCashbackDetails() {
    if (this.cashbackForm.valid) {

      let cashbackObj: PolicyCashback =
      {
        policyCashbackId: 0,
        policyCashbackRequestId: this.requestData.policyCashbackRequestId,
        userId: this.requestData.userId,
        agentCompanyId: 1,
        tpRatesId: 0,
        tpRequestId: 0,
        offlineQuotationId: 0,
        premimumAmount: this.cashbackForm.value.premiumAmount,
        cashbackAmount: this.cashbackForm.value.payoutAmount,
        status: this.cashbackForm.value.status,
        transactionDetails: this.cashbackForm.value.transactionID,
        transactionProof1: this.Proof1 == null ? "" : this.Proof1.split(',')[1],
        transactionProof2: this.Proof2 == null ? "" : this.Proof2.split(',')[1],
        isPaid: true,
        isDeleted: false,
        createdBy: 1,
        createdDate: this.todayDate,
        modifiedBy: 1,
        modifiedDate: this.todayDate,
        fileNameProof1: this.fileNameProof1,
        fileNameProof2: this.fileNameProof2
      }
      this.cashbackForm.value.premiumAmount = '';
      this.cashbackForm.value.payoutAmount = '';
      this.cashbackForm.value.transactionID = '';
      this.cashbackForm.value.status = '';
      this.cashbackService.AddPolicyCashbackRequest(cashbackObj).subscribe(result => {
       
        alert('SUCCESS!! Data saved sucessfully!');
        this.getCashbackDetails();
      });
    }
  }

  ngOnInit() {
    const storedData = localStorage.getItem('requestdataCashback');
    console.log(storedData);
    if (storedData) {
      this.requestData = JSON.parse(storedData);
      console.log(this.requestData);
    }

    this.getAllMastersData();
    this.getCashbackDetails();
  }

  getCashbackDetails() {
    this.cashbackService.GetPolicyCashbackDetails(this.requestData.policyCashbackRequestId).subscribe(result => {
      this.gridData = result;
      console.log(result);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridData.filter = filterValue.trim().toLowerCase();

    if (this.gridData.paginator) {
      this.gridData.paginator.firstPage();
    }
  }
  getAllMastersData() {
    this.commonService.getAllMasters().subscribe(data => {
      this.insuranceCompanyList = data.vehicleInsuranceCompanyList
    });
  }
  changed(value: any) {
    this.insuranceCompanyId = value.value.insuranceCompanyId
    this.insuranceCompanyName = value.value.insuranceCompanyName
  }

  deleteQuotation(val: number) {
    //  this.offlinepolicyService.DeleteOfflineQuoteDetails(val).subscribe(result=>
    //  { 
    //    console.log(result);
    //    this.getQuoteDetails();
    //    alert('SUCCESS!! Data deleted sucessfully!');
    //  });

  }


  onFileSelected(event: Event, proof: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      const reader = new FileReader();
      reader.onload = () => {
        if (proof == 1) {
          this.fileNameProof1 = file.name;
          this.Proof1 = reader.result as string;
        }
        if (proof == 2) {
          this.fileNameProof2 = file.name;
          this.Proof2 = reader.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

}

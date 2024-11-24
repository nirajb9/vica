import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfflineQuotationRequestDetail } from '@app/_models/OfflinePolicyModel';
import { CommonService } from '@app/_services/common.service';
import { OfflinepolicyService } from '@app/_services/offlinepolicy.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-offlinepolicydetails-add',
  templateUrl: './offlinepolicydetails-add.component.html',
  styleUrls: ['./offlinepolicydetails-add.component.less']
})
export class OfflinepolicydetailsAddComponent implements OnInit {

  offlinePolicyForm: FormGroup;
  todayDate: Date | null;
  offlineQuotationId: number = 0;
  insuranceCompanyList: any;
  insuranceCompanyId: number =0;
  insuranceCompanyName: string = "";
  userid: number = 0;
  fileBase64: string | null = null;
  fileName: string | null = null;
  offlineQotationDetailsList: any;
  requestData: any;

  displayedColumns: string[] = ['offlineQuotationDetailsId','insuranceCompanyName','premiumAmount','payoutAmount','status','quotationUrl','action'];
  gridData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,private commonService: CommonService, private offlinepolicyService: OfflinepolicyService) {
    this.offlinePolicyForm = this.fb.group({  
      premiumAmount: ['', Validators.required],
      payoutAmount: ['', Validators.required],
      quotationUrl: [''],
      status: ['', Validators.required]
    });
   

    this.todayDate = new Date();
     this.route.paramMap.subscribe(params => {
       this.offlineQuotationId = Number(params.get('id'));
       this.userid = Number(params.get('userid'));
   });
  }
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  AddOfflineQuoteDetails() {
    if (this.offlinePolicyForm.valid) {

       let offlineObj : OfflineQuotationRequestDetail =
       {
       
        offlineQuotationDetailsId: 0,
        offlineQuotationId: this.offlineQuotationId,
        agentCompanyId: 1,
        userId: this.userid,
        premiumAmount: this.offlinePolicyForm.value.premiumAmount,
        payoutAmount: this.offlinePolicyForm.value.payoutAmount,
        quotationUrl: '', //this.offlinePolicyForm.value.payoutAmount,
        status: this.offlinePolicyForm.value.status,
        insuranceCompanyId: this.insuranceCompanyId,
        insuranceCompanyName: this.insuranceCompanyName,
        isDeleted: false,
        createdBy: 1,
        createdDate: this.todayDate,
        modifiedBy: 1,
        modifiedDate: this.todayDate,
        fileName: this.fileName,
        fileData: this.fileBase64 == null? "" : this.fileBase64.split(',')[1], 
       }
        this.offlinePolicyForm.value.premiumAmount = '';
        this.offlinePolicyForm.value.payoutAmount = '';
        this.offlinePolicyForm.value.status = '';   
      this.offlinepolicyService.addOfflineQuoteDetails(offlineObj).subscribe(result => {         
          console.log(result);
          this.getQuoteDetails();
          
      });
    }
  }

  ngOnInit() {
    const storedData = localStorage.getItem('requestdata');
    if (storedData) {
      this.requestData = JSON.parse(storedData);
      console.log(this.requestData);
    }

    this.getAllMastersData();
    this.getQuoteDetails();
  }
  getQuoteDetails(){
    this.offlinepolicyService.getOflineQuotationDetails(this.offlineQuotationId, this.userid).subscribe(result =>{
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

  deleteQuotation(val : number){

  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.fileBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}

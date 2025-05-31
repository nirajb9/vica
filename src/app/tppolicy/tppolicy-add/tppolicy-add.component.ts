import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, map, startWith } from 'rxjs';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AccountService } from '@app/_services';
import { StateService } from '@app/_services/state.service';
import { CommonService } from '@app/_services/common.service';
import { QuoterequestService } from '@app/_services/quoterequest.service';


@Component({
  selector: 'app-tppolicy-add',
  templateUrl: './tppolicy-add.component.html',
  styleUrls: ['./tppolicy-add.component.less']
})
export class TppolicyAddComponent implements OnInit {

  selectedState = '0'
  selectedVehicleType = '0'
  tpRates: TpRates[] = [];
  stateList: any;
  vehicleTypeList: any;
  rtoList: any;
  vehicleCCListAll: any;
  vehicleCCList: Multiselect[] = [{ id: 0, text: "--Select--", isselect: true }];
  fuelTypeList: any;
  ageList: any;
  insuranceCompanyList: any;
  rtoSelectList: Multiselect[] = [{ id: 0, text: "Select All", isselect: false }];
  length!: number;
  countryCtrl!: FormControl;
  filteredCountry: Observable<any[]> | undefined;
  showHide: boolean = true;

  constructor(private accountService: AccountService, private stateService: StateService, private quotereuestService: QuoterequestService,
    private commonService: CommonService) {
    this.countryCtrl = new FormControl();

  }

  getAllMastersData() {
    this.commonService.getAllMasters().subscribe(data => {
      let d = data;
      this.stateList = data.stateList
      this.vehicleTypeList = data.vehicleTypeList
      this.rtoList = data.rtoList
      this.fuelTypeList = data.fuelTypeList
      this.ageList = data.vehicleAgeList
      this.vehicleCCListAll = data.vehicleCubicCapicityList
      this.insuranceCompanyList = data.vehicleInsuranceCompanyList

      for (let i = 0; i < data.rtoList.length; i++) {
        let ms: Multiselect = {
          id: data.rtoList[i].rtoId,
          text: data.rtoList[i].rtoCode,
          isselect: false
        }
        this.rtoSelectList.push(ms);
      }
      for (let j = 0; j < data.vehicleCubicCapicityList.length; j++) {
        let ms: Multiselect = {
          id: data.vehicleCubicCapicityList[j].cubicCapicityId,
          text: data.vehicleCubicCapicityList[j].cubicCapicityName,
          isselect: false
        }
        this.vehicleCCList.push(ms);
      }
    }
    );
  }

  stateChange(event: any) {

    this.rtoSelectList = [{ id: 0, text: "Select All", isselect: false }];
    for (let i = 0; i < this.rtoList.length; i++) {
      if (this.rtoList[i].stateId == Number(event.value)) {
        let ms: Multiselect = {
          id: this.rtoList[i].rtoId,
          text: this.rtoList[i].rtoCode,
          isselect: false
        }
        this.rtoSelectList.push(ms);
      }
    }
    for (let i = 0; i < this.tpRates.length; i++) {
      this.tpRates[i].rtoList1 = this.rtoSelectList;
    }
    if (this.selectedState == "0" || this.selectedVehicleType == "0") {

      this.showHide = true
    }
    else {
      this.getvehicleData();
      this.showHide = false;
    }
  }
  getvehicleData() {

    this.quotereuestService.GetVehicleDetails(Number(this.selectedState), Number(this.selectedVehicleType)).subscribe(res => {
      console.log(res);
      if (res.length > 0) {
        for (let i = 0; i < res.length; i++) {
          this.rtoSelectListFunction();
          for (let j = 0; j < res[i].lsRtoId.length; j++) {
            for (let x = 0; x < this.rtoSelectList.length; x++) {
              if (this.rtoSelectList[x].id === res[i].lsRtoId[j]) {
                this.rtoSelectList[x].isselect = true;
              }

            }
          }
          var tt1: TpRates =
          {
            tpRatesId: res[i].tpRatesId,
            stateId: res[i].stateId,
            rtoId: res[i].rtoId,
            rtoName: 1,
            agentCompanyId: res[i].agentCompanyId,
            userId: res[i].userId,
            companyId: res[i].companyId,
            vehicleVariantId: res[i].vehicleVariantId,
            fueltypeId: res[i].fueltypeId,
            gcvGvw: res[i].gcvGvw,
            cubicCapicityId: res[i].cubicCapicityId,
            ageId: res[i].ageId,
            insuranceCompanyId: res[i].insuranceCompanyId,
            paCover: res[i].paCover,
            driverCover: res[i].driverCover,
            passengersCover: res[i].passengersCover,
            premimumAmount: res[i].premimumAmount,
            premimumGst: res[i].premimumGst,
            payoutAmount: res[i].payoutAmount,
            fromDate: undefined,
            toDate: undefined,
            isDeleted: false,
            rtoList1: this.rtoSelectList,
            ageList: this.ageList,
            CCList: this.vehicleCCList,
            fueltypeList: this.fuelTypeList,
            insuranceCompanyList: this.insuranceCompanyList,
            lsRtoId: [],
            actualPayoutAmount: res[i].actualPayoutAmount,
            rTOIds:  res[i].rTOIds,
            ageRangeMin :  res[i].ageRangeMin,
            ageRangeMax : res[i].ageRangeMax,
          }

          this.tpRates.push(tt1)
        }

      }
    });
  }
  vehicleTypeChange(event: any) {
    //this.vehicleCCList =[];
    this.vehicleCCList = [{ id: 0, text: "--Select--", isselect: true }];
    for (let i = 0; i < this.vehicleCCListAll.length; i++) {
      if (this.vehicleCCListAll[i].vehicleTypeId == Number(event.value)) {
        let ms: Multiselect = {
          id: this.vehicleCCListAll[i].cubicCapicityId,
          text: this.vehicleCCListAll[i].cubicCapicityName,
          isselect: false
        }
        this.vehicleCCList.push(ms);
      }
    }
    
    for (let i = 0; i < this.tpRates.length; i++) {
      this.tpRates[i].CCList = this.vehicleCCList;
    }
    if (this.selectedState == "0" || this.selectedVehicleType == "0") {

      this.showHide = true
    }
    else {
      this.getvehicleData();
      this.showHide = false;
    }
  }

  optionsControl = new FormControl([]);
  searchTerm: string = '';

  ngOnInit(): void {
    this.getAllMastersData();

  }
  changed(value: any, i: number, field: string) {
    if (field == 'fuel') {
      this.tpRates[i].fueltypeId = Number(value.value);
    }
    if (field == 'age') {
      this.tpRates[i].ageId = Number(value.value);
    }
    if (field == 'cc') {
      this.tpRates[i].cubicCapicityId = Number(value.value);
    }
    if (field == 'icom') {
      this.tpRates[i].insuranceCompanyId = Number(value.value);
    }
    if (field == 'p') {
      this.tpRates[i].premimumAmount = Number(value.target.value);
    }
    if (field == 'pa') {
      this.tpRates[i].paCover = Number(value.target.value);
    }
    if (field == 'da') {
      this.tpRates[i].driverCover = Number(value.target.value);
    }
    if (field == 'pc') {
      this.tpRates[i].passengersCover = Number(value.target.value);
    }
    if (field == 'po') {
      this.tpRates[i].payoutAmount = Number(value.target.value);
    }
    if (field == 'ageRangeMin') {
      this.tpRates[i].ageRangeMin = Number(value.target.value);
    }
    if (field == 'ageRangeMax') {
      this.tpRates[i].ageRangeMax = Number(value.target.value);
    }
    if (field == 'actualPayoutAmount') {
      this.tpRates[i].actualPayoutAmount = Number(value.target.value);
    }
  }

  DeleteTP(x: any) {

    if (this.tpRates[x].tpRatesId > 0) {
      this.tpRates[x].isDeleted == true;
    }
    else {
      this.tpRates.splice(x);
    }

    console.log(x);
  }
  isAllSelected() {
    let selected = this.optionsControl.value;
    return selected!.length === this.rtoSelectList.length;
  }

  isPartialSelected() {
    const selected = this.optionsControl.value;
    return selected!.length > 0 && selected!.length < this.rtoSelectList.length;
  }

  toggleSelectAll(event: any, index: number, index1: number) {
    let chkValue = event.source.value;
    if (event.checked) {
      if (chkValue == 0) {
        for (let i = 0; i < this.tpRates[index].rtoList1.length; i++) {
          this.tpRates[index].rtoList1[i].isselect = true;
        }
      }
      else {
        this.tpRates[index].rtoList1[index1].isselect = true;
      }

    }

    if (event.checked == false) {
      if (chkValue == 0) {
        for (let i = 0; i < this.tpRates[index].rtoList1.length; i++) {
          this.tpRates[index].rtoList1[i].isselect = false;
        }
      }
      else {
        this.tpRates[index].rtoList1[index1].isselect = false;
      }
    }
  }

  rtoSelectListFunction() {
    this.rtoSelectList = [{ id: 0, text: "Select All", isselect: false }];
    for (let i = 0; i < this.rtoList.length; i++) {
      if (this.rtoList[i].stateId == Number(this.selectedState)) {
        let ms: Multiselect = {
          id: this.rtoList[i].rtoId,
          text: this.rtoList[i].rtoCode,
          isselect: false
        }
        this.rtoSelectList.push(ms);
      }
    }
  }
  AddNewTp() {
    this.rtoSelectListFunction();
    var tt1: TpRates =
    {
      tpRatesId: 0,
      stateId: 0,
      rtoId: 0,
      rtoName: 1,
      agentCompanyId: 1,
      userId: 1,
      companyId: 1,
      vehicleVariantId: 1,
      fueltypeId: 1,
      gcvGvw: 0,
      cubicCapicityId: 0,
      ageId: 1,
      insuranceCompanyId: 1,
      paCover: 0,
      driverCover: 0,
      passengersCover: 0,
      premimumAmount: 0,
      premimumGst: 0,
      payoutAmount: 0,
      fromDate: undefined,
      toDate: undefined,
      isDeleted: false,
      rtoList1: this.rtoSelectList,
      ageList: this.ageList,
      CCList: this.vehicleCCList,
      fueltypeList: this.fuelTypeList,
      insuranceCompanyList: this.insuranceCompanyList,    
      actualPayoutAmount: 0,
      rTOIds: '',
      ageRangeMin : 0,
      ageRangeMax : 0
    }

    this.tpRates.push(tt1)
  }
  Reset() {
    this.tpRates =[];
       this.showHide = true;
       this.selectedState = "0";
       this.selectedVehicleType = "0";
  }
  Submit() {

    this.tpRates.forEach(s => {
      s.stateId = Number(this.selectedState);
      s.vehicleTypeId = Number(this.selectedVehicleType);
    }
    )
    this.quotereuestService.addTpRates(this.tpRates).subscribe(res => {
       this.tpRates =[];
       this.showHide = true;
       this.selectedState = "0";
       this.selectedVehicleType = "0";
    })
  }


}
export class Country {
  constructor(public name: string, public code: string) { }
}

export class Multiselect {
  id!: number
  text!: string
  isselect!: boolean
}

export interface TpRates {
  tpRatesId: number;
  stateId?: number;
  rtoId?: number;
  rtoName?: number;
  agentCompanyId?: number;
  userId?: number;
  companyId?: number;
  vehicleVariantId?: number;
  fueltypeId?: number;
  gcvGvw?: number;
  cubicCapicityId?: number;
  ageId?: number;
  insuranceCompanyId?: number;
  paCover?: number;
  driverCover?: number;
  passengersCover?: number;
  premimumAmount?: number;
  premimumGst?: number;
  payoutAmount?: number;
  fromDate?: Date | undefined;
  toDate?: Date | undefined;
  isDeleted?: boolean;
  rtoList1: Multiselect[];
  fueltypeList?: any;
  CCList?: Multiselect[];
  ageList?: any;
  insuranceCompanyList?: any;
  vehicleTypeId?: number;
  lsRtoId?: [];
  actualPayoutAmount?: number;
  rTOIds?: any;
  ageRangeMin? : number;
  ageRangeMax? : number;
  
}


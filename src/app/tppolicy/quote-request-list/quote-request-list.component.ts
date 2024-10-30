import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AccountService } from '@app/_services';
import { QuoterequestService } from '@app/_services/quoterequest.service';
import { StateService } from '@app/_services/state.service';

@Component({
  selector: 'app-quote-request-list',
  templateUrl: './quote-request-list.component.html',
  styleUrls: ['./quote-request-list.component.less']
})
export class QuoteRequestListComponent implements OnInit {

 
  displayedColumns: string[] = ['id','vehicleNo','paymentLink', 'name', 'insuranceCompany', 'premimumAmount','action'];
  gridData: any;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private accountService: AccountService, private quoterequestService: QuoterequestService,private router: Router) {
   
  }

  
  ngOnInit(): void {
    this.getTpQuoteRequestData();  
  }

  getTpQuoteRequestData() {

    this.quoterequestService.getTPRequestQuotation(1).subscribe(res => {
      this.gridData = res;
      
    })
  }


  ngAfterViewInit() {
   // this.gridData.paginator = this.paginator;
   // this.gridData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridData.filter = filterValue.trim().toLowerCase();

    if (this.gridData.paginator) {
      this.gridData.paginator.firstPage();
    }
  }
  viewQuote(id: number) {
    this.router.navigate(['/tppolicy/quote-request-details/'+id]);
    console.log(id);
  }
}



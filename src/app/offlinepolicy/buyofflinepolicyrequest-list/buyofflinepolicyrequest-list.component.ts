import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OfflinepolicyService } from '@app/_services/offlinepolicy.service';

@Component({
  selector: 'app-buyofflinepolicyrequest-list',
  templateUrl: './buyofflinepolicyrequest-list.component.html',
  styleUrls: ['./buyofflinepolicyrequest-list.component.less']
})
export class BuyofflinepolicyrequestListComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private offlinepolicyService: OfflinepolicyService) { }

  displayedColumns: string[] = ['offlinePolicyBuyRequestId','vehicleNo', 'paymentLink', 'status','action'];
  gridData: any;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getOfflinePolicyBuy();
  }

  getOfflinePolicyBuy() {
    this.offlinepolicyService.GetOfflinePolicyBuyRquest(0).subscribe(result=>
    {
      this.gridData = new MatTableDataSource<any>(result);
    });
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridData.filter = filterValue.trim().toLowerCase();

    if (this.gridData.paginator) {
      this.gridData.paginator.firstPage();
    }
  }

  viewOfflinePolicy(id: number, userid: number, allData: any) {
    localStorage.setItem('offlinerequestdata', JSON.stringify(allData));
    this.router.navigate(['/offlinepolicy/offlinepolicypaymentlink-add/'+id+"/"+userid]);
    console.log(id);
  }

  ngAfterViewInit() {
    this.gridData.paginator = this.paginator;
    this.gridData.sort = this.sort;
  }

}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OfflinepolicyService } from '@app/_services/offlinepolicy.service';

@Component({
  selector: 'app-offlinepolicy-list',
  templateUrl: './offlinepolicy-list.component.html',
  styleUrls: ['./offlinepolicy-list.component.less']
})
export class OfflinepolicyListComponent implements OnInit, AfterViewInit {

  offlineQuotationList: any;
  constructor(private router: Router, private offlinepolicyService: OfflinepolicyService) { }

  displayedColumns: string[] = ['offlineQuotationId','userName','vehicleNo','idv','status','action'];
  gridData: any;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getOfflineQuotation();
  }

  ngAfterViewInit() {
    this.gridData.paginator = this.paginator;
    this.gridData.sort = this.sort;
  }


  getOfflineQuotation() {
    this.offlinepolicyService.getOflineQuotation().subscribe(result=>
    {
      this.gridData = new MatTableDataSource<any>(result);
      //this.gridData = result;
      console.log(this.gridData);
    });
   
  }

  viewOfflinePolicy(id : number, userid: number, allData: any) {
    localStorage.setItem('requestdata', JSON.stringify(allData));
    this.router.navigate(['/offlinepolicy/offlinepolicy-add/'+id+"/"+userid]);
    console.log(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.gridData.filter = filterValue.trim().toLowerCase();

    if (this.gridData.paginator) {
      this.gridData.paginator.firstPage();
    }
  }

}

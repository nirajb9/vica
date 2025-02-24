import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PolicycopyService } from '@app/_services/policycopy.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-viewpolicycopy',
  templateUrl: './viewpolicycopy.component.html',
  styleUrls: ['./viewpolicycopy.component.less']
})
export class ViewpolicycopyComponent implements OnInit {

   cashbackList: any;
     constructor(private router: Router, private policycopyService: PolicycopyService) { }
   
     displayedColumns: string[] = ['policyCopyId','userName','vehicleNo','policyCopyUrl','status','action'];
     gridData: any;
     private subscription!: Subscription;
   
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     @ViewChild(MatSort) sort!: MatSort;
     ngOnInit(): void {
       this.getPolicyCopy();
       this.subscription = interval(180000).subscribe(() => this.getPolicyCopy());
     }
   
     ngAfterViewInit() {
       this.gridData.paginator = this.paginator;
       this.gridData.sort = this.sort;
     }
   
   
     getPolicyCopy() {
       this.policycopyService.GetPolicyCopy().subscribe(result=>
       {
         this.gridData = new MatTableDataSource<any>(result);
         //this.gridData = result;
         console.log(result);
       });
      
     }
   
     addCashbackDetails(id : number, userid: number, allData: any) {
       localStorage.setItem('requestdataCashback', JSON.stringify(allData));
       this.router.navigate(['/cashback/cashback-add/'+id]);
       console.log(id);
     }
   
     applyFilter(event: Event) {
       const filterValue = (event.target as HTMLInputElement).value;
       this.gridData.filter = filterValue.trim().toLowerCase();
   
       if (this.gridData.paginator) {
         this.gridData.paginator.firstPage();
       }
     }
   
     ngOnDestroy() {
       if (this.subscription) {
         this.subscription.unsubscribe(); // Clean up the subscription
       }
     } 

}

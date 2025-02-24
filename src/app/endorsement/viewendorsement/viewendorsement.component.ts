import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EndorsementService } from '@app/_services/endorsement.service';
import { PolicycopyService } from '@app/_services/policycopy.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-viewendorsement',
  templateUrl: './viewendorsement.component.html',
  styleUrls: ['./viewendorsement.component.less']
})
export class ViewendorsementComponent implements OnInit {

 cashbackList: any;
      constructor(private router: Router, private endorsementService: EndorsementService) { }
    
      displayedColumns: string[] = ['endorsementId','userName','vehicleNo','policycopy','policycopyFinal','status','action'];
      gridData: any;
      private subscription!: Subscription;
    
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;
      ngOnInit(): void {
        this.getEndorsementPolicyCopy();
        this.subscription = interval(180000).subscribe(() => this.getEndorsementPolicyCopy());
      }
    
      ngAfterViewInit() {
        this.gridData.paginator = this.paginator;
        this.gridData.sort = this.sort;
      }
    
    
      getEndorsementPolicyCopy() {
        this.endorsementService.GetEndorsementPolicy().subscribe(result=>
        {
          this.gridData = new MatTableDataSource<any>(result);        
          console.log(result);
        });    
      }
    
      viewEndorsement(id : number, userid: number, allData: any) {
        localStorage.setItem('requestdataEndorsement', JSON.stringify(allData));
        this.router.navigate(['/endorsement/endorsement-add/'+id]);
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

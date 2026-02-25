import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master-service';

@Component({
  selector: 'app-enquiry-list',
  imports: [CommonModule],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css',
})
export class EnquiryList implements OnInit {

  masterServ = inject(MasterService)

  enquiries: any[] = [];

  ngOnInit(): void {
    this.getEnquiryList();
  }

  getEnquiryList(){
    this.masterServ.getAllEnquiry().subscribe({
      next: (result:any)=>{
        this.enquiries = result.data;
      }
    })
  }



}

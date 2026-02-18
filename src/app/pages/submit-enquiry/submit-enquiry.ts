import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-enquiry',
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-enquiry.html',
  styleUrl: './submit-enquiry.css',
})
export class SubmitEnquiry implements OnInit {

  masterService = inject(MasterService);
  categoryList: any[] = [];
  statusList: any[] = [];

  newEnquiryObj: any = {
  "enquiryId": 0,
  "customerName": "",
  "customerEmail": "",
  "customerPhone": "",
  "message": "",
  "categoryId": 0,
  "statusId": 0,
  "enquiryType": "",
  "isConverted": false,
  "enquiryDate": new Date(),
  "followUpDate": "",
  "feedback": ""
}


  ngOnInit(): void {
    this.getCategory();
    this.getStatus();

  }

  getCategory() {
    this.masterService.getAllCategory().subscribe({
      next: (result: any) => {
        this.categoryList = result.data;
        console.log('list',this.categoryList)
      }
    })
  }

  getStatus() {
    this.masterService.getAllStatus().subscribe({
      next: (result: any) => {
        this.statusList = result.data;
      }
    })
  }

  onSaveEnquiry(){
    this.masterService.saveNewEnquiry(this.newEnquiryObj).subscribe({
      next:(result:any)=>{
        alert("Enquiry submitted successfully")
      },
      error:(error:any)=>{
        alert('Error from submit enquiry api')
      }
    })
  }

}

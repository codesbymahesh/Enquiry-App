import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnquiryModel } from '../../model/class/Enquiry.model';

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

  newEnquiryObj: EnquiryModel = new EnquiryModel()


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
    this.newEnquiryObj.statusId = '1';
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

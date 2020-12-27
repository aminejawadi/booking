import {Component, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  currentReservations: any;
  pastReservations: any;
  commentForm: any;
  currentReservation: number;

  constructor() { }

  ngOnInit(): void {
  }

  tabChange($event: any) {

  }

  cancelReservation(reservation: any) {

  }

  postComment(currentReservation: any) {

  }

  open1(content1: TemplateRef<any>, reservation: any) {

  }
}

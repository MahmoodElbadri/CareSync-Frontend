import { Component, inject, OnInit, signal } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { DoctorAppointmentDto } from '../models/doctor-appointment-dto';
import { JsonPipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [JsonPipe, TitleCasePipe, DatePipe],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.scss'
})
export class DoctorDashboardComponent implements OnInit{

  //variables
  protected doctorAppointments = signal<DoctorAppointmentDto[]>([]);
  //injections
  protected doctorService = inject(DoctorService);

  //methods
  ngOnInit(): void {
    console.log('Doctor Dashboard is called');
    this.doctorService.getDoctorAppointment().subscribe({
      next: (response) => {
        this.doctorAppointments.set(response);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }


}

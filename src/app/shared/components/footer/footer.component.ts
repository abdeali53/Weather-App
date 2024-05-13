import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  lastUpdatedDate!: Date;
  constructor(private citiesService:CitiesService){
  }
  ngOnInit(): void {
    this.lastUpdatedDate = new Date();
  }


}

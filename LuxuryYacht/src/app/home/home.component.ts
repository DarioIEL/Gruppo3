import { Component, OnInit } from '@angular/core';
import { formService } from '../form/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  yachts = [];

  constructor(private formService: formService) { }

  ngOnInit(): void {
    
      this.formService.getYacht().subscribe(data => {
        this.yachts = data;
      })
    
  }

}

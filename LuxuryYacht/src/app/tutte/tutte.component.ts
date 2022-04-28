import { Component, OnInit } from '@angular/core';
import { formService } from '../form/form.service';

@Component({
  selector: 'app-tutte',
  templateUrl: './tutte.component.html',
  styleUrls: ['./tutte.component.css']
})
export class TutteComponent implements OnInit {
  
  yachts = [];

  constructor(private formService: formService) { }

  ngOnInit(): void {
    this.formService.getYacht().subscribe(data => {
      this.yachts = data;
    })
  }

}

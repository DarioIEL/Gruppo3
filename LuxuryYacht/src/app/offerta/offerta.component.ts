import { Component, OnInit } from '@angular/core';
import { yachtService } from 'src/service/yacht.service';

@Component({
  selector: 'app-offerta',
  templateUrl: './offerta.component.html',
  styleUrls: ['./offerta.component.css']
})
export class OffertaComponent implements OnInit {

  yachts = [];

  constructor(private yachtService: yachtService) { }

  ngOnInit(): void {

    this.yachtService.getOfferta().subscribe(data => {
      this.yachts = data;
    })

  }

}

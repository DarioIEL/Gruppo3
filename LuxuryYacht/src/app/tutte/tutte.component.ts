import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { yachtService } from 'src/service/yacht.service';
import { formService } from '../form/form.service';
import { Yacht } from '../model/yacht';

@Component({
  selector: 'app-tutte',
  templateUrl: './tutte.component.html',
  styleUrls: ['./tutte.component.css']
})
export class TutteComponent implements OnInit {
  
  yachts = [];

  constructor(private formService: formService,
              private yachtService: yachtService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    
    this.formService.getYacht().subscribe(data => {
      this.yachts = data;
    })

    this.yachtService.getOneYacht().subscribe(data =>{
      this.yachts = data;
      console.log(data);
      
    })

    // this.yachtService.onDeleteYacht()
    
    
    //   onDeleteY(id: string){
      //     this.yachtService.deleteYacht(id).subscribe(data =>{
        //       console.log(data);
        
        //     })
        // }
        
      }

      
      onDeleteYacht(id: string){
        
        this.yachtService.deleteYacht(id)
        .subscribe(data =>{
          console.log(data);
          //this.router.navigate([this.router.url])
          window.location.reload();
        });          
        }
 
      }
      
    

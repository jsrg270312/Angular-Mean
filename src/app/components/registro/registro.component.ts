import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms"

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
private checkoutFor : FormGroup
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder) { 
    this.checkoutFor = this.formBuilder.group({
      email: '',
      password: '',
      
    })
  }

  ngOnInit() {
  }

}

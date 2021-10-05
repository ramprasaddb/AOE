import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css'],
})
export class OrderEntryComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input()
  logoPath: string = '/assets/images/logo.PNG';
  @Input()
  seviceYear: string = '2021';
  serviceMonth: string = '03';
  serviceDay: string = '30';

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

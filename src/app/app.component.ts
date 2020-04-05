import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  myForm: FormGroup;

  ngOnInit() {
    console.log('onInit')
    this.myForm = new FormGroup({});
    /*this.myForm.addControl('testControl', new FormControl(''));
    this.myForm.controls['testControl'].setErrors({'test' : 'myError'});*/
  }

  ngAfterViewInit() {
    console.log('afterView INit');
  }

  ngAfterViewChecked() {
    console.log('afterView Checked');
  }

  clickBtn() {
    console.log('Click Called');

    this.myForm.setErrors({error : 'Error Occured'});
    setTimeout(() => console.log('timeout called'), 1000);
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  statusText: string = null;

  constructor(private fb: FormBuilder,
              private authService: UserService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  async onSubmit() {
    if (this.form.valid) {
      const response = await this.authService.authenticate({
        email: this.form.get('email').value,
        password: this.form.get('password').value
      });
      if (!response.succeeded) {
        this.statusText = response.responseText;
      }
    }
    this.formSubmitAttempt = true;
  }

}

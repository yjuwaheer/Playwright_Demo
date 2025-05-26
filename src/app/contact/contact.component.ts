import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(1)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.minLength(1)]],
    inquiryType: ['', [Validators.required, Validators.minLength(1)]],
    message: ['', [Validators.required, Validators.minLength(1)]],
    consent: [false, [Validators.required, Validators.requiredTrue]],
  });

  showSuccessMessage = false;
  showErrorMessage = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.showSuccessMessage = true;
      this.showErrorMessage = false;
      this.contactForm.reset();
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    } else {
      this.showSuccessMessage = false;
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 3000);
    }
  }
}

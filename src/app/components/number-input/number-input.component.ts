import {
  Component,
  EventEmitter,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { FlagComponent } from '../flag/flag.component';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-number-input',
  imports: [
    MatInput,
    MatLabel,
    FormsModule,
    MatIcon,
    MatFormField,
    MatSuffix,
    MatIconButton,
    FlagComponent,
    TranslocoDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class NumberInputComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  min = input.required<number>();
  max = input.required<number>();

  onConfirm = output<number>();

  form?: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      number: new FormControl(null, [
        Validators.required,
        Validators.min(this.min()),
        Validators.max(this.max()),
      ]),
    });
  }
}

import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ngx-formly/tailwind/form-field';
import { FormlyInputModule } from '@ngx-formly/tailwind/input';
import { FormlyTextAreaModule } from '@ngx-formly/tailwind/textarea';
import { FormlyRadioModule } from '@ngx-formly/tailwind/radio';
import { FormlyCheckboxModule } from '@ngx-formly/tailwind/checkbox';
import { FormlySelectModule } from '@ngx-formly/tailwind/select';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
  ],
})
export class FormlyTailwindModule {}

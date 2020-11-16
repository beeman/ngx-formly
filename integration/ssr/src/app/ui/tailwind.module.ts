import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormlyTailwindModule } from '@ngx-formly/tailwind';

import { UIModule } from './ui.module';
import { UIComponent } from './ui.component';

@NgModule({
  imports: [
    UIModule,
    FormlyTailwindModule,
    RouterModule.forChild([
      {
        path: '',
        component: UIComponent,
      },
    ]),
  ],
  providers: [],
})
export class UITailwindModule {}

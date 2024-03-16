import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberThousandsPipe } from './pipes/number-thousands.pipe';
import { DirectiveADirective } from './directives/directive-a.directive';
import { ModalCustomComponent } from './components/modal-custom/modal-custom.component';
import { CustomComponentComponent } from './components/custom-component/custom-component.component';



@NgModule({
  declarations: [
    NumberThousandsPipe,
    DirectiveADirective,
    ModalCustomComponent,
    CustomComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

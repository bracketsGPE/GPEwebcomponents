import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { PortalModalComponent } from './portal-modal/portal-modal.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    PortalModalComponent
  ],
  imports: [
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AcornSampleApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AcornSampleApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class AcornSampleApplicationHomeModule {}

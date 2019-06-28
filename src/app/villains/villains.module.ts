import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { VillainsComponent } from './villains/villains.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { VillainService } from './villain.service';

const routes: Routes = [{ path: '', pathMatch: 'full', component: VillainsComponent }];

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [VillainsComponent, VillainDetailComponent],
  declarations: [VillainsComponent, VillainDetailComponent, VillainListComponent],
  providers: [VillainService]
})
export class VillainsModule {}

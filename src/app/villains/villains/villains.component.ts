import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Villain } from '../../core';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$: Observable<Villain[]>;
  loading$: Observable<boolean>;

  constructor(private villainService: VillainService) {
    this.villains$ = villainService.entities$;
  }

  ngOnInit() {
    this.getVillains();
  }

  add(villain: Villain) {
    this.villainService.add(villain);
  }

  close() {
    this.selected = null;
  }

  delete(villain: Villain) {
    this.villainService.delete(villain);
    this.close();
  }

  enableAddMode() {
    this.selected = {} as any;
  }

  getVillains() {
    this.villainService.getAll();
    this.close();
  }

  select(villain: Villain) {
    this.selected = {} as any;
  }

  update(villain: Villain) {
    this.villainService.update(villain);
  }
}

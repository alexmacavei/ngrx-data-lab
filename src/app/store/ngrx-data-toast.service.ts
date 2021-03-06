import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { ToastService } from '../core';
import { ofEntityOp, EntityAction, OP_SUCCESS, OP_ERROR, EntityCacheAction } from '@ngrx/data';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgrxDataToastService {
  constructor(actions$: Actions, toast: ToastService) {
    actions$
      .pipe(
        ofEntityOp(),
        filter((ea: EntityAction) => ea.payload.entityOp.endsWith(OP_SUCCESS) || ea.payload.entityOp.endsWith(OP_ERROR))
      )
      .subscribe(action => toast.openSnackBar(`${action.payload.entityName} action`, action.payload.entityOp));

    actions$
      .pipe(ofType(EntityCacheAction.SAVE_ENTITIES_SUCCESS, EntityCacheAction.SAVE_ENTITIES_ERROR))
      .subscribe((action: any) => toast.openSnackBar(`${action.type} - url: ${action.payload.url}`, 'SaveEntities'));
  }
}

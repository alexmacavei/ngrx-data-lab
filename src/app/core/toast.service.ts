import { Injectable } from '@angular/core';
import { isE2E } from './e2e-check';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    if (isE2E) {
      console.log(`${message} - ${action}`);
    } else {
      this.snackBar.open(message, action, {
        duration: 2000
      });
    }
  }
}

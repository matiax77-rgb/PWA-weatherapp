import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-save-confirm-dialog',
  template: `
    <h2 mat-dialog-title>Potwierdzenie</h2>
    <div mat-dialog-content>Czy na pewno chcesz zapisać tę prognozę pogody?</div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Anuluj</button>
      <button mat-raised-button color="primary" (click)="onConfirm()">Zapisz</button>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule]
})
export class SaveConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<SaveConfirmDialogComponent>) {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}

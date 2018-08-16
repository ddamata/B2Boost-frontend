import {ChangeDetectionStrategy,Component,HostListener,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Action, Store } from "@ngrx/store";
//import { State } from "../../app.reducers";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    delete: Function,
    go: string,
    text: string,
    title: string
  },
  private mdDialogRef: MatDialogRef<ConfirmationDialogComponent>) { 
  }
  
  public close() {
    this.mdDialogRef.close();
  }

  public delete() {
    if (this.data.go !== undefined) {
      this.data.delete(this.data.go);
    }
    this.close();
  }

  @HostListener("keydown.esc")
  public onEsc() {
    this.close();
  }

}

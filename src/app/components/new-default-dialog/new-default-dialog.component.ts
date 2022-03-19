import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext} from "@taiga-ui/core";

@Component({
  selector: 'app-new-default-dialog',
  templateUrl: './new-default-dialog.component.html',
  styleUrls: ['./new-default-dialog.component.css']
})
export class NewDefaultDialogComponent implements OnInit {

  dForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    name2: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
  });

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly contextData: TuiDialogContext<any>,
  ) {
  }

  ngOnInit(): void {
  }

  closeModal(result: any) {
    this.contextData.completeWith(result);
  }

}

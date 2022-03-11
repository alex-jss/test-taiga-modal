import {Component, Inject, OnInit} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {TuiDialogContext} from "@taiga-ui/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-custom-modal',
  templateUrl: './new-custom-modal.component.html',
  styleUrls: ['./new-custom-modal.component.css']
})
export class NewCustomModalComponent implements OnInit {

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

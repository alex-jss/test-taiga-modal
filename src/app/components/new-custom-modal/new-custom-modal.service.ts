import {Injectable, Provider} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {NewCustomModalComponent} from "./new-custom-modal.component";

@Injectable({
  providedIn: 'root',
})
export class NewCustomModalService extends AbstractTuiDialogService<any> {
  readonly component = new PolymorpheusComponent(NewCustomModalComponent);
  protected readonly defaultOptions: any;
}

export const NEW_CUSTOM_MODAL_PROVIDER: Provider = {
  provide: TUI_DIALOGS,
  useExisting: NewCustomModalService,
  multi: true,
};

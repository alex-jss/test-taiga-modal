import {Injectable, Provider} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {SecondCustomDialogComponent} from "./second-custom-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class NewCustomModalService extends AbstractTuiDialogService<any> {
  readonly component = new PolymorpheusComponent(SecondCustomDialogComponent);
  protected readonly defaultOptions: any;
}

export const SECOND_CUSTOM_MODAL_PROVIDER: Provider = {
  provide: TUI_DIALOGS,
  useExisting: NewCustomModalService,
  multi: true,
};

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TUI_SANITIZER, TuiButtonModule, TuiDialogModule, TuiErrorModule, TuiRootModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiFieldErrorModule, TuiFieldErrorPipeModule, TuiInputModule} from "@taiga-ui/kit";
import {NewCustomModalComponent} from './components/new-custom-modal/new-custom-modal.component';
import {NEW_CUSTOM_MODAL_PROVIDER} from "./components/new-custom-modal/new-custom-modal.service";
import { NewDefaultDialogComponent } from './components/new-default-dialog/new-default-dialog.component';
import { SecondCustomDialogComponent } from './components/second-custom-dialog/second-custom-dialog.component';
import {SECOND_CUSTOM_MODAL_PROVIDER} from "./components/second-custom-dialog/second-custom-modal.service";

@NgModule({
  declarations: [
    AppComponent,
    NewCustomModalComponent,
    NewDefaultDialogComponent,
    SecondCustomDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiFieldErrorPipeModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiErrorModule
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    NEW_CUSTOM_MODAL_PROVIDER,
    SECOND_CUSTOM_MODAL_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

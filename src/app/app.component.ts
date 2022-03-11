import {Component, Inject, Injector} from '@angular/core';
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {NewCustomModalService} from "./components/new-custom-modal/new-custom-modal.service";
import {NewCustomModalComponent} from "./components/new-custom-modal/new-custom-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-taiga-modal';

  constructor(
    @Inject(Injector) private readonly injector: Injector,
    @Inject(NewCustomModalService) private readonly newCustomModalService: NewCustomModalService,
  ) {}

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.newCustomModalService.open(new PolymorpheusComponent(NewCustomModalComponent, this.injector), {
      label: '',
      closeable: false,
      dismissible: false,
      required: true,
      size: 'm',
      data: {}
    });

    dialogRef.subscribe(async (_resData: any) => {

    });
  }

}

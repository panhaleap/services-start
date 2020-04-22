import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Since in app.module.ts we already add providers: [LoggingService, AccountsService]
  // so these services are provided to all components in our app.
  // For that, we don't have to add provides but we just add it in constructor only
  constructor(private logginService: LoggingService, private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    // this.logginService.logStatusChange(status);
  }
}

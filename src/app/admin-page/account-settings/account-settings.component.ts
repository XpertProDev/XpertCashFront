import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatTabsModule, MatExpansionModule, MatFormFieldModule],
  templateUrl: './account-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent {
  panelOpenState = false;
}

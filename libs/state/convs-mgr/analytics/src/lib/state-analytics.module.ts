import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetabaseService } from '../../../../../private/state/analytics/src/lib/services/metabase.service';

@NgModule({
  imports: [CommonModule],
  providers: [MetabaseService],
})
export class ConvsMgrAnalyticsModule {}

// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { CatListComponent }    from './cat-list.component';

// Route Configuration
export const CatRoutes: RouterConfig = [
  { path: 'cats', component: CatListComponent }
];

// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { DogListComponent }    from './dog-list.component';

// Route Configuration
export const DogRoutes: RouterConfig = [
  { path: 'dogs', component: DogListComponent }
];

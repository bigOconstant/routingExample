import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
// Import configured routes
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

import { JSONP_PROVIDERS } from '@angular/http';



if (environment.production) {
  enableProdMode();
}
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, JSONP_PROVIDERS
])
.catch(err => console.error(err));


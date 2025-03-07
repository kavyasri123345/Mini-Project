import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Ensure 'routes' is correctly exported

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Ensure routes are exported properly
  ],
};

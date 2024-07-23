import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ErrorHandlerInterceptor } from './interceptor/error-handler.interceptor';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      NgxGoogleAnalyticsModule.forRoot(environment.ga)
    ),
    provideToastr(),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor, ErrorHandlerInterceptor, LoaderInterceptor]))
  ]
};

import {AppComponent} from './components/app.component.ts'
import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {FORM_PROVIDERS} from 'angular2/common';

bootstrap(AppComponent, [HTTP_PROVIDERS , FORM_PROVIDERS]);

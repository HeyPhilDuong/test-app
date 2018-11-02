import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './/app-routing.module';
import {TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler, MESSAGE_FORMAT_CONFIG } from 'ngx-translate-messageformat-compiler';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Raven from 'raven-js';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { InputExampleComponent } from './input-example/input-example.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { FixedComponent } from './fixed/fixed.component';
import { RavenErrorHandler } from './raven-error-handler';

Raven.config('https://a723b003dade4e68bf1d4c22cc3a5fe5@sentry.io/1314750', { release: 'aa776044dec511e88f234201c0a8d032' }).install();
// Raven.setRelease('version-number');
// Raven.setEnvironment('environment name');

// Documentation comes from https://www.npmjs.com/package/@ngx-translate/core

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent,
    InputExampleComponent,
    FixedComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    MatSidenavModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

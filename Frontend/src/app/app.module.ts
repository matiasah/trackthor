import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './modules/material/material.module';

import { AuthInterceptor } from './interceptors/auth-interceptor';

import { AdministradorEmpresaModule } from './modules/administrador-empresa/administrador-empresa.module';
import { AdministradorSistemaModule } from './modules/administrador-sistema/administrador-sistema.module';
import { ChoferModule } from './modules/chofer/chofer.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,

        AdministradorEmpresaModule,
        AdministradorSistemaModule,
        ChoferModule,
        IonicModule.forRoot(),
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es-CL'
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        StatusBar,
        SplashScreen
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

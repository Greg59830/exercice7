import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { ServerSizeRename, ServersSort } from './exercice/my-pipes.pipe';

@NgModule({
  declarations: [
    ServerSizeRename,
    ServersSort,
    AppComponent,
    ExerciceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

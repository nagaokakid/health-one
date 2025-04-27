import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WorkoutRoutineModule } from './features/workout-routine/workout-routine.module';
import { PanelCardModule } from './features/shared/panel-card/panel-card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectModule,
    ReactiveFormsModule,
    FormsModule,
    WorkoutRoutineModule,
    PanelCardModule
  ],
  providers: [
    // provideAnimationsAsync(),
    // providePrimeNG({
    //   theme: {
    //     preset: Aura
    //   }
    // })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

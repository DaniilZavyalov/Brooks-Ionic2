import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { IntroScreen } from '../pages/IntroScreen/IntroScreen';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen';
import { LoginDoneScreen } from '../pages/LoginDoneScreen/LoginDoneScreen';
import { ApplicationLogScreen } from '../pages/ApplicationLogScreen/ApplicationLogScreen';
import { EquipmentLogScreen } from '../pages/EquipmentLogScreen/EquipmentLogScreen';
import { EquipmentSelectedScreen } from '../pages/EquipmentLogScreen/EquipmentSelectedScreen/EquipmentSelectedScreen';
import { LogHours } from '../pages/EquipmentLogScreen/EquipmentSelectedScreen/LogHours/LogHours';
import { RoutineMaintenance } from '../pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/RoutineMaintenance';
import { NewJob } from '../pages/ApplicationLogScreen/NewJob/NewJob';
import {CurrentJob} from "../pages/ApplicationLogScreen/CurrentJob/CurrentJob";
import {PreviousJob} from "../pages/ApplicationLogScreen/PreviousJob/PreviousJob";
import {ScheduledMaintenance} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/ScheduledMaintenance";
import {NewSchedule} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/NewSchedule/NewSchedule";
import {Repairs} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/Repairs/Repairs";
import {Notes} from "../pages/ApplicationLogScreen/NewJob/Notes/Notes";
import {MachineWash} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/MachineWash/MachineWash";
import {Grease} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/Grease/Grease";
import {OtherRoutine} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/OtherRoutine/OtherRoutine";

import {ApiService} from '../services/apiService';
import {Spinner} from '../services/spinnerService';
import {AppSplashScreen} from "../pages/AppSplashScreen/AppSplashScreen";
import { Camera } from '@ionic-native/camera';
import {TaskReminder} from "../pages/TaskReminder/TaskReminder";
import {RepairNeeded} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/Repairs/RepairNeeded/RepairNeeded";
import {RepairPerformed} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/Repairs/RepairPerformed/RepairPerformed";
import {CapClean} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/CapClean/CapClean";
import {ChainOiled} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/ChainOiled/ChainOiled";
import {ChainTensioned} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/RoutineMaintenance/ChainTensioned/ChainTensioned";
import {ViewSchedule} from "../pages/EquipmentLogScreen/EquipmentSelectedScreen/ScheduledMaintenance/ViewSchedule/ViewSchedule";

@NgModule({
  declarations: [
    MyApp,
    AppSplashScreen,
    IntroScreen,
    LoginScreen,
    LoginDoneScreen,
    ApplicationLogScreen,
    NewJob,
    CurrentJob,
    PreviousJob,
    EquipmentLogScreen,
    EquipmentSelectedScreen,
    LogHours,
    RoutineMaintenance,
    ScheduledMaintenance,
    NewSchedule,
    Repairs,
    Notes,
    MachineWash,
    Grease,
    OtherRoutine,
    TaskReminder,
    RepairNeeded,
    RepairPerformed,
    CapClean,
    ChainOiled,
    ChainTensioned,
    ViewSchedule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AppSplashScreen,
    IntroScreen,
    LoginScreen,
    LoginDoneScreen,
    ApplicationLogScreen,
    NewJob,
    CurrentJob,
    PreviousJob,
    EquipmentLogScreen,
    EquipmentSelectedScreen,
    LogHours,
    RoutineMaintenance,
    ScheduledMaintenance,
    NewSchedule,
    Repairs,
    Notes,
    MachineWash,
    Grease,
    OtherRoutine,
    TaskReminder,
    RepairNeeded,
    RepairPerformed,
    CapClean,
    ChainOiled,
    ChainTensioned,
    ViewSchedule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    Spinner,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

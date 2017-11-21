import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ObjectsComponent } from './objects/objects.component';
import { BuildingComponent } from './objects/building/building.component';
import { RoomsComponent } from './objects/rooms/rooms.component';
import { RoomsDetailComponent } from './objects/rooms-detail/rooms-detail.component';
import { BuildingItemComponent } from './objects/building/building-item/building-item.component';
import { RoomsItemComponent } from './objects/rooms/rooms-item/rooms-item.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsListComponent } from './news/news-list/news-list.component';

import { NewsItemComponent } from './news/news-list/news-item/news-item.component';
import { NewsItemDetailComponent } from './news/news-list/news-item-detail/news-item-detail.component';
import { FooterComponent } from './footer/footer.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { Rooms1Component } from './objects/rooms1/rooms1.component';
import { FeedbackEditComponent } from './feedback/feedback-edit/feedback-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    ObjectsComponent,
    BuildingComponent,
    RoomsComponent,
    RoomsDetailComponent,
    BuildingItemComponent,
    RoomsItemComponent,
    NewsComponent,
    FeedbackComponent,
    ContactsComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsItemDetailComponent,
    FooterComponent,
    CollaborateComponent,
    Rooms1Component,
    FeedbackEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

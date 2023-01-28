import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { VimeModule } from "@vime/angular";

import { AppComponent } from "./app.component";
import { SonglistComponent } from "./components/songlist/songlist.component";
import { PlayerComponent } from "./components/player/player.component";

@NgModule({
  declarations: [AppComponent, SonglistComponent, PlayerComponent],
  imports: [BrowserModule, HttpClientModule, VimeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

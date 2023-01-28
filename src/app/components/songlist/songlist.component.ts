import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-songlist",
  templateUrl: "./songlist.component.html",
  styleUrls: ["./songlist.component.scss"]
})
export class SonglistComponent implements OnInit {
  public songs$: Observable<Song[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.songs$ = this.http
      .get<SongResponse>(
        "https://api.sheety.co/d2343068636ae717ef905f82ca615cf7/uka/songs"
      )
      .pipe(map((json) => json.songs));
  }
}

interface SongResponse {
  songs: Song[];
}

interface Song {
  id: number;
  title: string;
  production: string;
  pageURl: string;
  songUrl?: string;
}

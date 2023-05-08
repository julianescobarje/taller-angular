import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) {}

  getSeries() {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  getSeasonsAverage() {
    return (
      this.series.reduce((acc, serie) => acc + serie.seasons, 0) /
      this.series.length
    );
  }

  ngOnInit() {
    this.getSeries();
  }
}

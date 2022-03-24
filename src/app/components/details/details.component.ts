import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiDataService: ApiDataService) { }

  movieId: any;
  movieDetails: any = {}
  imageSource = environment.imageSource


  ngOnInit(): void {
    this.movieId = this.route.snapshot.queryParams['movieId'];
    this.getMovieDetails()
  }

  getMovieDetails() {
    this.apiDataService.getMovie(this.movieId).subscribe((res: any) => {
      this.movieDetails = res
      console.log(this.movieDetails)
    })
  }



}

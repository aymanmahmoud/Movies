import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ApiDataService: ApiDataService) { }
  popularMovies = []
  topRatedMovies = []

  ngOnInit(): void {

    // get the popular Movies from the api service 
    this.ApiDataService.getPopular().subscribe((res:any) => {
      console.log(res.results)
      this.popularMovies = res.results
    })

    // get the Top Rated Movies from the api service 
    this.ApiDataService.getTopRated().subscribe((res: any) => {
      console.log(res.results)
      this.topRatedMovies = res.results
    })
  }

}

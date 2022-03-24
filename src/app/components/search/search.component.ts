import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private apiDataService: ApiDataService, private route: Router) { }

  ngOnInit(): void {
  }

  searchResult: any = null;
  limit = 5

  timeout: any;
  inputchanged(event: any) {
    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      console.log(event.target.value)
      this.apiDataService.searchMovie(event.target.value).subscribe((res: any) => {
        this.searchResult = res.results
        this.searchResult = this.searchResult.slice(0, this.limit)
        console.log(this.searchResult)
      })

    }, 1500)

  }

  showDetails(movieId: number) {
    this.route.navigate(['/details'],
      {
        queryParams: { movieId: movieId },
      })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private route: Router) { }
  @Input() sliderItems: any;
  imageSource = environment.imageSource

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    autoWidth: true,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

  showDetails(movieId: number) {
    this.route.navigate(['/details'],
      {
        queryParams: { movieId: movieId },
      })
  }

}

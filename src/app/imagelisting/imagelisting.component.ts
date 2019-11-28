import { Component, OnInit } from '@angular/core';
import { ImageItem } from './ImageItem';
import { Observable }     from 'rxjs';
import { ImageService } from './ImageService';

@Component({
  selector: 'app-imagelisting',
  templateUrl: './imagelisting.component.html',
  styleUrls: ['./imagelisting.component.css']
})
export class ImagelistingComponent implements OnInit {
  //imageList: Observable<ImageItem>;
  imageList: {}
  
  constructor(
    private service: ImageService
  ) {}

  ngOnInit() {
    this.imageList = this.service.getImageList();
  }

}

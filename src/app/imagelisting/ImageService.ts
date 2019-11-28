import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';

import { ImageItem } from './ImageItem';
import { IMAGESLIST } from './mock-images';

@Injectable({
    providedIn: 'root',
})
export class ImageService {
    
    //private imageList$: BehaviorSubject<ImageItem> = new BehaviorSubject<ImageItem>(IMAGESLIST);
  
    constructor(private messageService: MessageService) { }
  
    getImageList() { return IMAGESLIST; }
  
  }
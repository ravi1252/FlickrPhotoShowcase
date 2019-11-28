import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MessageService } from '../message.service';

import { ImageItem } from './ImageItem';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ImageService {
    
    //private imageList$: BehaviorSubject<ImageItem> = new BehaviorSubject<ImageItem>(IMAGESLIST);
  
    constructor(private http: Http) { }
  
    getImageList() { 
        console.log("inside");
        return this.http.get('http://localhost:3000/search?text=trees').pipe(map(res => res.json()));
    }
  
  }
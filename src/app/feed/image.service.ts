import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ImageInfo{
  title:string;
  link:string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images:object[] = [];
  private url: string = 'https://upload.gyazo.com/api/upload';
  private clientId: string = 'a770a269896142c2ea2a365f4bf57002d0dbb694260bb718e921e16cc0b975d3';
  imageLink:any;
  public imgInfos: any;
 
  constructor(private http:HttpClient) { }
  
  async uploadImage(imageFile:File, infoObject:{}){
    let formData = new FormData();
    formData.append('imagedata', imageFile, imageFile.name);
    formData.append('access_token', "c77f50a4a58faa6cc2db648e50217ce39a4f7f4a2f28ab0fe63c47cd619c552e")
 
    let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
    });
   
    // const imageData = await this.http.post(this.url, formData, {headers:header}).toPromise();
    // this.imgInfos = imageData;
    // this.imageLink = imageData['data'].link;

    return await this.http.post<any>(this.url, formData).toPromise();

    // let newImageObject:ImageInfo = {
    //   title:infoObject["title"],
    //   link:this.imageLink
    // };
 
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { FeedService } from '../feed/feed.service';
import { post } from '../feed/post.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listOfPosts: any[] = [];
  constructor(private authService: AuthService, private feedService: FeedService) { }

  ngOnInit(): void {
    this.authService.autoLogin().subscribe(isAuth => { console.log(isAuth) });
    this.feedService.getHome().subscribe(data => {
      console.log(data);
      data.listOfPosts.forEach(post => {
        post.title = this.titleCaseWord(post.title);
      });
      this.listOfPosts = data.listOfPosts.sort((obj1, obj2) => {
        if (obj1.likes > obj2.likes) {
          return -1;
        }

        if (obj1.likes < obj2.likes) {
          return 1;
        }

        return 0;
      });
      console.log(this.listOfPosts);
      console.log(data);
    });
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1);
  }

  getImageURL(index: number) {
    var item = 'url';
    if (this.listOfPosts[index]['content']) {
      if(this.listOfPosts[index].content[item]){
        return this.listOfPosts[index].content.url;
      }
    }
  }
}

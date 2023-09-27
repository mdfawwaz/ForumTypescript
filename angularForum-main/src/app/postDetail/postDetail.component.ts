import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-getposts',
  templateUrl: './postDetail.component.html',
  styleUrls: ['./postDetail.component.css']
})
export class GetpostsComponent {
  postId: number = 1;
  post: any;

  constructor(private postService: AppService) { }

  ngOnInit(): void {

    this.getPostDetail(this.postId);
  }

  getPostDetail(id: number): void {
    this.postService.getPostDetail(id) // Use the 'id' parameter
      .subscribe((data) => {
        this.post = data;
      });
  }
  

  onSubmit(): void {
    if (this.postId !== undefined) {
      this.getPostDetail(this.postId);
    }
  
}
}
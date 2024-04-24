import { Component, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Comment } from '../../interfaces/comments';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listComments: Comment[] = [];
  @Input()
  set id (id: string) {
    console.log("Id from Parent",  id);
  }
  
  constructor(private homeService: HomeService) {

  }

  ngOnInit() {
    this.homeService.getData('3', 'Mallory_Kunze@marie.org').subscribe((data) => {
      console.log(data);
      this.listComments = data as unknown as Comment[]
    })
  }

}

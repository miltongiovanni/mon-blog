import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      loveIts: 2,
      created_at: new Date(2019, 8, 20, 16, 20, 42, 11)
    },
    {
      title: 'Mon deuxième post',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loveIts: -1,
      created_at: new Date(2019, 8, 21, 17, 12, 42, 11)
    },
    {
      title: 'Encore post',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      loveIts: 0,
      created_at: new Date(2019, 8, 22, 18, 45, 42, 11)
    }
  ];
}

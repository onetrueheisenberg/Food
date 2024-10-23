import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'test-food';
  public arr: any[] = [];
  url = 'http://localhost:5000/api/hello';
  config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  // const axios = new Axios();
  constructor() {}

  async ngOnInit(): Promise<void> {
    await axios.get(this.url, this.config).then((response) => {
      console.log(response.data);
      console.log(response.data);
      this.arr = response.data['data'];
      console.log(response.data);
    });
  }
}

import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  async getGeoLoacation() {
    let position = await Geolocation.getCurrentPosition();
    console.log(position);
  }
}

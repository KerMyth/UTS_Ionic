import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Import Add (before/after import please installation axios from cmd)
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // Variabel GetData for array
  public allData:any = [];


  constructor() {
    this.DataGet();
  }

  async DataGet(){
    const res:any = await axios.get('http://localhost/UTS-API/get_datanew.php');
 

    console.log(res.data);
    this.allData = res.data.result;
  }
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.DataGet()
    }, 2000);
  };


}

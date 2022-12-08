import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Import Add (before/after import please installation axios from cmd)
import axios from 'axios';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

   // Variabel GetData for array
   public allData:any = [];

  constructor() {
    this.GetData();
  }

  async GetData(){
    const res:any = await axios.get('http://localhost/UTS-API/get_data.php');
 

    console.log(res.data);
    this.allData = res.data.result;
  }
  // Function getData ---------------------------------------------------------------------------
  
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.GetData()
    }, 2000);
  };

}

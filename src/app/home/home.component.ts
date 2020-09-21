import { Component, OnInit } from '@angular/core';
import { ProductService } from '../appServices/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private _msgService:ProductService) { }

products={};
ngOnInit(): void {

this._msgService.product().subscribe(productData => this.products = productData)



// this.http.get(url).subscribe(res=>{
//   this.resData=res;
//   this.newsdata=this.resData;
// console.log(this.newsdata);
// console.log(res);
// })



  }

}


import { Injectable } from '@angular/core';

/*
  Generated class for the BmiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BmiProvider {


  bmiCalculate(height:number,weighht:number){
    return (weighht / height) / height;
  }

}

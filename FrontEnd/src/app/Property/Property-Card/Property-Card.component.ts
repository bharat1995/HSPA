import {Component} from '@angular/core'

@Component(
  {
    selector:'app-property-card',
    // template:'<h1>This is Bharat</h1>',
    templateUrl:'Property-Card.component.html',
    //styles :['h1 {font-weight:normal;}']
    styleUrls:['Property-Card.component.css']
  }
)

export class PropertyCardComponent {

  Property:any = {
    "ID":1,
    "Name":"ANTILLA",
    "Type":"House",
    "Price":12000
  }
}

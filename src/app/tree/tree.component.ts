import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html'
})
export class TreeComponent {

  constructor() { }

  //Sample JSON list
  public list = [
    {
      name: "Beverages",
      categories: [
          {
            name: "Pepsi",
            categories: []
          },
          {
            name: "CocaCola",
            categories: [
                {
                  name: "Coke Diet",
                  categories: []
                },
                {
                  name: "Coke Zero",
                  categories: []
                }
              ]
          }
        ]
    },
    {
      name: "Footwear",
      categories: [
          {
            name: "Sneakers",
            categories: []
          },
          {
            name: "Sandals",
            categories: []
          },
          {
            name: "Heels",
            categories: [
              {
                name: "Flip Flops",
                categories: []
              },
              {
                name: "Crocs",
                categories: [
                  {
                    name: "Plush",
                    categories: []
                  }
                ]
              }
            ]
          }
        ]
    }
  ];
}
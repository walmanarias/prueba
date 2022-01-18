import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  listOfObjects = [
    { name: 'first', value: 1  },
    { name: 'second', value: 2  },
    { name: 'third', value: 3  },
    { name: 'fourth', value: 4  }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

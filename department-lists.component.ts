import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-lists',
  template: 
  `<h3 class=items>Department Lists</h3>
  <ul >
  <li (click) = onSelect(department) class="badge" [class.selected] = "isSelected(department)" *ngFor= "let department of departments">
  <span  > {{department.id}} </span> {{department.name}}
  </li>
  </ul>`,
  styles: [`
  .items{
    padding-bottom:10px;
  }
    .badge{
      margin-left:20px;
      width:100px;
      background-color:lightGrey;
      margin-bottom:10px;
    }
    .selected{
      background-color:coral;      
    }
  `]
})
export class DepartmentListsComponent implements OnInit {

  public selectedId;

  departments = [

    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"},
    {"id":3, "name": "MongoDB"},
    {"id":4, "name": "Ruby"},
    {"id":5, "name": "Bootstrap"},

  ]
  constructor( private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      console.log("id", id)
      this.selectedId = id;
    });
  }

  onSelect(item){
    // this.router.navigate(['/departments', item.id]);
    this.router.navigate([item.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}

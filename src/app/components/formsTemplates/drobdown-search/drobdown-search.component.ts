import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-drobdown-search',
  templateUrl: './drobdown-search.component.html',
  styleUrls: ['./drobdown-search.component.css']
})
export class DrobdownSearchComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['ahmed', 'FATMA', 'AMR' , 'ayman'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  // return options after filter lowercase or uppercase
   _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

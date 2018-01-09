import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-multimedia-search-bar',
  templateUrl: './multimedia-search-bar.component.html',
  styleUrls: ['./multimedia-search-bar.component.css']
})
export class MultimediaSearchBarComponent implements OnChanges, OnInit  {

  @Input() open = false;

  form: FormGroup;
  searchInput: FormControl;
  searchInputEl: HTMLInputElement;

  constructor(public el: ElementRef, public formBuilder: FormBuilder) {}
  

  ngOnChanges(changes: any): void {
    if (changes.open.currentValue) {
      this.searchInput.setValue('');
    }
  }

  ngOnInit(): void {
    this.searchInput = new FormControl();

    this.form = this.formBuilder.group({
      search: this.searchInput
    });

    this.searchInputEl = this.el.nativeElement.querySelector('input');

    this.el.nativeElement
      .querySelector('.search-bar')
      .addEventListener('transitionend', () => {
        if (this.open) {
          this.searchInputEl.focus();
        }
      }, false);
  }

  submit(): void {
    if (this.form.valid) {
      const value = this.searchInput.value.trim();
      if (value.length) {
        this.open = false;
        console.log('is this what yo searched for? ', value)
        // this.router.navigate(['/search', {q: value}]);
        this.searchInputEl.blur();
      }
    }
  }



}
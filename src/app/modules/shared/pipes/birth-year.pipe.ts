import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthYear'
})
export class BirthYearPipe implements PipeTransform {

  transform(age: number): string {
    const year = new Date().getFullYear()
    
    return `${age}, ${year - age}`;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

}

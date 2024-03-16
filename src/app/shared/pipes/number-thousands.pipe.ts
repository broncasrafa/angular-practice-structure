import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberThousands'
})
export class NumberThousandsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

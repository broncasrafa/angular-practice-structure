import { Pipe, PipeTransform } from '@angular/core';
import { numberThousandsFormatter } from 'src/app/core/utils/common-functions.util';

@Pipe({
  name: 'numberThousandsPlaces'
})
export class NumberThousandsPipe implements PipeTransform {

  transform(value: any): string {
    return numberThousandsFormatter(value);
  }

}

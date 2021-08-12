import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(val: string, char: string, valueToReplace: string) {
    return val.replace(char,valueToReplace);
  }
}

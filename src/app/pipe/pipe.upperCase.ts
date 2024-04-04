import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  /**
   * @param value The string to transform to lower case.
   */
  transform(value: string): string;
  transform(value: null | undefined): null;
  transform(value: string | null | undefined): string | null;
  transform(value: string | null | undefined): string | null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw new Error('pipe format wrong !');
    }
    return value.toUpperCase();
  }
}

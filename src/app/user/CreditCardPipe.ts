// pipes/credit-card.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    // Remove any non-digit characters
    const digits = value.replace(/\D/g, '');

    // Split into groups of 4 and join with " – "
    return digits
      .match(/.{1,4}/g)
      ?.join(' – ') ?? value;
  }
}
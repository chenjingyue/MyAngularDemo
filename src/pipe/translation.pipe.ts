import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from 'src/service/translation.service';

@Pipe({name: 'translationX'})
export class TranslationPipe implements PipeTransform {

  constructor(public translationService:TranslationService) {
  }

  transform(value: string): string {
      return this.translationService.translation(value);
  }
}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'newtitlecase'
})

export class NewtitlecasePipe implements PipeTransform {
    transform(text: string) {
        text = text.replace(/Of/g, 'of');
        text = text.replace(/The/g, 'the');
        if (text.indexOf('of') === 0) {
            text = 'O' + text.substr(1);
        }
        if (text.indexOf('the') === 0) {
            text = 'T' + text.substr(1);
        }
        return text;
    }
}

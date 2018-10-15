import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summarize'
})

export class SummarizePipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) {
            return null;
        }
        return value.substr(0, 5) + '...';
    }
}

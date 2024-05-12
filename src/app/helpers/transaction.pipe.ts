import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'transaction'
})
export class TransactionPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        const items: Record<string, string> = {
            'incoming': 'Entrada',
            'expense': 'Despesa'
        };

        return items[value];
    }
}
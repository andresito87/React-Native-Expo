
// Formateador de tipo de moneda nativo en JS
export class Formatter {
    public static currency(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value);
    };
}
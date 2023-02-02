export class Utilities {
    static getFormattedTime(timestamp: number): string {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
}
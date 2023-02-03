export class Utilities {
    static getFormattedTime(timestamp: number): string {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', timeZone: 'UTC' });
    }

    static getFormattedCityName(cityName: string) {
        return cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
    }

    static toFormattedCelsius(degreeKelvin: number) {
        return (degreeKelvin - 273.15).toFixed(0) + '°C';
    }
}
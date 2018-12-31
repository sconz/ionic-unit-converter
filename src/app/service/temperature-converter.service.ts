import { IUnitConverter } from './unit-converter.interface'
import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureConverter implements IUnitConverter {

    /* from http://allmeasures.com/temperature.html

    Fahrenheit (F)	            F	                (F - 32) * 5/9     	(F - 32) * 5/9 + 273.15
    Celsius (C or o)	    (C * 9/5) + 32	            C	                C + 273.15
    Kelvin (K)	        (K - 273.15) * 9/5 + 32	    K - 273.15	                K 
    
    */

    public units = {
        "F": "f",   // Fahrenheit
        "C": "c",   // Celsius
        "K": "k"    // Kelvin
    };

    doConverter(from: string, to: string, value: number): number {

        let result: number;

        if (from == to) {
            return value;
        } else {
            switch (from + to) {
                case "FC":
                    result = (value - 32) * 5 / 9;
                    break;
                case "FK":
                    result = (value - 32) * 5 / 9 + 273.15;
                    break;
                case "CF":
                    result = (value * 9 / 5) + 32;
                    break;
                case "CK":
                    result = value + 273.15;
                    break;
                case "KF":
                    result = (value - 273.15) * 9 / 5 + 32;
                    break;
                case "KC":
                    result = value - 273.15;
                    break;
            }

        }
        return result;
    }
}
import { IUnitConverter } from "./unit-converter.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class VolumeConverter implements IUnitConverter {
    // from http://metricunitconversion.globefeed.com/Volume_Conversion_Table.asp
    public units = {
        "ml": 1,                        // milliliter
        "L": 1000,                      // liter
        "m3": 1000000,                  // cubic meter
        "in3": 16.387064,               // cubic inch
        "ft3": 28316.846592,            // cubic foot/feet
        "US pt": 473.176473,            // pint [US liquid]
        "US qt": 946.352946,            // quart [US liquid]
        "US gal": 3785.411784,          // gallon [US liquid]
        "US bbl": 119240.471196         // barrel [US liquid]
    };

    doConverter(from: string, to: string, value: number): number {
		return (value*(this.units[from]/this.units[to]));
    }
}

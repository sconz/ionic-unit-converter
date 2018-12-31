import { Component } from '@angular/core';
import { VolumeConverter } from '../service/volume-converter.service';
import { TemperatureConverter } from '../service/temperature-converter.service';
import { IUnitConverter } from '../service/unit-converter.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  keys = Object.keys;
  selectedType: string;

  fromValue: number;
  from: string;
  toValue: number;
  to: string;

  unitTypes = new Map<string, IUnitConverter>();

  constructor(volumeConverter: VolumeConverter, temperatureConverter: TemperatureConverter) {
    this.unitTypes.set('Temperature', temperatureConverter);
    this.unitTypes.set('Volume', volumeConverter);
  }

  doConverter() {
    if (this.from && this.fromValue && this.to) {
      this.toValue = this.unitTypes.get(this.selectedType).doConverter(this.from, this.to, this.fromValue);
    }
  }

  get units() {
    return this.unitTypes.get(this.selectedType).units;
  }

}

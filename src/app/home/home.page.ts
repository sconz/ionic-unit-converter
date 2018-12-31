import { Component } from '@angular/core';
import { VolumeConverter } from '../service/volume-converter.service';
import { TemperatureConverter } from '../service/temperature-converter.service';
import { IUnitConverter } from '../service/unit-converter.interface';

enum UnitType {
  Temperature = "Temperature",
  Volume = "Volume"
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  keys = Object.keys;
  types = UnitType;

  type: any;
  fromValue: number;
  from: any;
  toValue: number;
  to: any;

  service: IUnitConverter;
  vConverter: VolumeConverter;
  tConverter: TemperatureConverter;

  constructor(volumeConverter: VolumeConverter, temperatureConverter: TemperatureConverter) {
    this.vConverter = volumeConverter;
    this.tConverter = temperatureConverter;
  }

  doSelect() {

    switch (this.type) {
      case "Temperature":
        this.service = this.tConverter;
        break;

      case "Volume":
        this.service = this.vConverter;
        break;

      default:
        this.service = null;

    }
  }

  doConverter() {
    if (this.from && this.fromValue && this.to) {
      this.toValue = this.service.doConverter(this.from, this.to, this.fromValue);
    }
  }
}

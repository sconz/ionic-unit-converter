import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureConverter } from './temperature-converter.service';

describe('Service: Temperature Converter Service', () => {
    let service: TemperatureConverter;

    beforeEach(() => {
        service = new TemperatureConverter();
    });

    it('Temperature Converter has units', () => {
        expect(service.units).not.toBeNull;
    });

    it('Temperature Converter 30C -> 86F', () => {
        expect(service.doConverter('C', 'F', 30)).toEqual(86);
    });
});
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VolumeConverter } from './volume-converter.service';

describe('Service: Volume Converter Service', () => {
    let service: VolumeConverter;

    beforeEach(() => {
        service = new VolumeConverter();
    });

    it('Volume Converter has units', () => {
        expect(service.units).not.toBeNull;
    });

    it('Volume Converter 1L -> 1000ml', () => {
        expect(service.doConverter('L', 'ml', 1)).toEqual(1000);
    });
});
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { VolumeConverter } from '../service/volume-converter.service';
import { TemperatureConverter } from '../service/temperature-converter.service';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let de: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        VolumeConverter, 
        TemperatureConverter
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    de = fixture.debugElement.queryAll(By.css('ion-item ion-select'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has unit type selector', () => {
    fixture.detectChanges();
    const typeSelector = de[0].nativeElement;
    expect(typeSelector).not.toBeNull;
  });

  it('should has a placeholde on unit type selector', () => {
    fixture.detectChanges();
    const typeSelector = de[0];
    expect(typeSelector.attributes['placeholder']).toEqual('Select Unit');
  });
});

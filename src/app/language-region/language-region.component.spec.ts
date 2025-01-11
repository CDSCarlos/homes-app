import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageRegionComponent } from './language-region.component';

describe('LanguageRegionComponent', () => {
  let component: LanguageRegionComponent;
  let fixture: ComponentFixture<LanguageRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LanguageRegionComponent]
    });
    fixture = TestBed.createComponent(LanguageRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

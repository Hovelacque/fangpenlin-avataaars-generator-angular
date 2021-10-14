import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAngularKapibaraComponent } from './avatar-angular-kapibara.component';

describe('AvatarAngularKapibaraComponent', () => {
  let component: AvatarAngularKapibaraComponent;
  let fixture: ComponentFixture<AvatarAngularKapibaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarAngularKapibaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarAngularKapibaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

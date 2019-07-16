import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SigininComponent } from './siginin.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';

describe('SigininComponent', () => {
  let component: SigininComponent;
  let fixture: ComponentFixture<SigininComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ SigininComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigininComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SigininComponent', () => {
    expect(component).toBeTruthy();
  });
  
  it('email should not be empty', () => {
    //component.value = true;
    fixture.detectChanges();
  
    let ele = fixture.debugElement.nativeElement.querySelector('emailc');
    expect(ele).toBeDefined;
  });

});

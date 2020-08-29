import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AcompComponent } from './acomp.component';

describe('AcompComponent', () => {
  let component: AcompComponent;
  let fixture: ComponentFixture<AcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AcompComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

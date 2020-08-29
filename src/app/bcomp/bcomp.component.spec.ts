import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BcompComponent } from './bcomp.component';

describe('BcompComponent', () => {
  let component: BcompComponent;
  let fixture: ComponentFixture<BcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BcompComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

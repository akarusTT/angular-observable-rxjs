import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GetPostsComponent } from './get-posts.component';
import { GetPostsService } from './get-posts.service';

describe('GetPostsComponent', () => {
  let component: GetPostsComponent;
  let fixture: ComponentFixture<GetPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GetPostsComponent],
      providers: [GetPostsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

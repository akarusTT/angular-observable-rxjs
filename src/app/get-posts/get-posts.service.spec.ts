import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GetPostsService } from './get-posts.service';
import { environment } from '../../environments/environment';

describe('GetPostsService', () => {
  let getPostsService: GetPostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetPostsService],
    });

    getPostsService = TestBed.get(GetPostsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(
    inject(
      [HttpTestingController, GetPostsService],
      // tslint:disable-next-line: no-shadowed-variable
      (httpClient: HttpTestingController, getPostsService: GetPostsService) => {
        const postItem = [
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body:
              // tslint:disable-next-line: max-line-length
              'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          },
          {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body:
              // tslint:disable-next-line: max-line-length
              'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 1,
            id: 3,
            title:
              'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body:
              // tslint:disable-next-line: max-line-length
              'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          },
        ];

        getPostsService.getPosts().subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

        const req = httpMock.expectOne(environment.REST_API + '/posts');
        expect(req.request.method).toBe('GET');

        req.flush(postItem);
        httpMock.verify();
      }
    )
  ));
});

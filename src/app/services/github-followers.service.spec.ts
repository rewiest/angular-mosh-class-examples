import { TestBed, inject } from '@angular/core/testing';

import { GithubFollowersService } from './github-followers.service';

describe('FollowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFollowersService]
    });
  });

  it('should be created', inject([GithubFollowersService], (service: GithubFollowersService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';
import { BlogViewModelService } from './servicios.service';

fdescribe('BlogViewModelService', () => {
  let service: BlogViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

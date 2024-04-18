import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesService } from '../shared/services/movies/movies.service';
import { Movie } from '../shared/models/movies.model';

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: '<div></div>',
})
class MockMovieComonent {}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let mockMovieService = jasmine.createSpyObj<MoviesService>('MoviesService', [
    'getOneMovie',
    'verifMovie',
  ]);
  let mockDataMovie: Movie = {
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DetailsComponent,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'movies', component: MockMovieComonent },
        ]),
      ],
      providers: [
        {
          provides: MoviesService,
          useValue: mockMovieService,
        },
      ],
    }).compileComponents();

    mockMovieService.getOneMovie.and.returnValue(
      signal(mockDataMovie).asReadonly()
    );

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be have button to go back ', () => {
    let button = fixture.nativeElement as HTMLElement;
    expect(button.querySelector('button')?.textContent).toBe('Back');
  });

  it('button go backhas attribute routerLink', () => {
    let button = fixture.nativeElement as HTMLElement;
    expect(
      button.querySelector('button')?.hasAttribute('routerLink')
    ).toBeDefined();
  });

  it('oneMovie must have signal value from service', () => {
    expect(component.oneMovie()).toEqual(mockDataMovie);
  });

  it('movie Id no found call navigateToMovies function', () => {
    fixture.detectChanges();
    mockMovieService.verifMovie.and.returnValue(-1);

    spyOn(component, 'navigateToMovies');

    console.log(component.movieIndex);

    expect(component.navigateToMovies).toHaveBeenCalled();
  });

  it('refreshMovie Function Call', () => {
    mockMovieService.verifMovie.and.returnValue(1);
    spyOn(component, 'refreshMovie');

    expect(component.refreshMovie).toHaveBeenCalled();
  });
});

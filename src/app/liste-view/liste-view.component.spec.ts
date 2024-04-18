import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeViewComponent } from './liste-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListeViewComponent', () => {
  let component: ListeViewComponent;
  let fixture: ComponentFixture<ListeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeViewComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

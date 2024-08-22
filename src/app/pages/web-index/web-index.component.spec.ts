import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebIndexComponent } from './web-index.component';

describe('WebIndexComponent', () => {
  let component: WebIndexComponent;
  let fixture: ComponentFixture<WebIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

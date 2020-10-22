import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QtyCounterComponent } from './qty-counter.component';

describe('QtyCounterComponent', () => {
  let component: QtyCounterComponent;
  let fixture: ComponentFixture<QtyCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtyCounterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QtyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

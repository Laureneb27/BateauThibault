import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicCardComponent } from './basic-card.component';

describe('BasicCardComponent', () => {
  let component: BasicCardComponent;
  let fixture: ComponentFixture<BasicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoatListPage } from './boat-list.page';

describe('BoatListPage', () => {
  let component: BoatListPage;
  let fixture: ComponentFixture<BoatListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoatListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

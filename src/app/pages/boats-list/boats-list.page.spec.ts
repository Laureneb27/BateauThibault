import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoatsListPage } from './boats-list.page';

describe('BoatsListPage', () => {
    let component: BoatsListPage;
    let fixture: ComponentFixture<BoatsListPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BoatsListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(BoatsListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

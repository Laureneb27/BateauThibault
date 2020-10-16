import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipesListPage } from './recipes-list.page';

describe('RecipesListPage', () => {
    let component: RecipesListPage;
    let fixture: ComponentFixture<RecipesListPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipesListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(RecipesListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

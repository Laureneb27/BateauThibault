import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BasicCardComponent } from 'src/app/components/basic-card/basic-card.component';



@NgModule({
    declarations: [BasicCardComponent, HeaderComponent],
    imports: [
        CommonModule,
    ],
    exports: [BasicCardComponent, HeaderComponent]
})
export class GlobalModule { }

import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
    imports: [MdToolbarModule, MdIconModule],
    exports: [MdToolbarModule, MdIconModule],
})
export class AppMaterialModule { }
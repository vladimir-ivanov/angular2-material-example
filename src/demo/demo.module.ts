import {NgModule} from '@angular/core';
import {CommonModule}   from '@angular/common';
import {DemoComponent} from "./demo.component.ts";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    providers: []
})
export class DemoModule {
}
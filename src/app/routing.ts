import {Routes, RouterModule}   from "@angular/router";
import {ModuleWithProviders}   from "@angular/core";
import {DemoComponent} from "../demo/demo.component.ts";

const appRoutes: Routes = [
    {path: "", redirectTo: "demo", pathMatch: "full"},
    {path: "demo", component: DemoComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component.ts";
import {routing, appRoutingProviders} from "./routing.ts";
import {DemoModule} from "../demo/demo.module.ts";

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpModule,
        BrowserModule,
        DemoModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
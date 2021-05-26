import { PiletApi } from 'ontec-shell';
import * as Blazor from './blazor.codegen';
import './Demo.styles.css';

export function setup(app: PiletApi) {
    Blazor.initPiralBlazorApi(app);
    Blazor.registerDependencies(app);
    Blazor.registerOptions(app);
    Blazor.registerPages(app);
    Blazor.registerExtensions(app);
    Blazor.setupPilet(app);

    app.registerTile(app.fromBlazor('counter'));
    app.registerMenu(app.fromBlazor('counter'));
    app.registerPage("/counter", app.fromBlazor("counter"));



}

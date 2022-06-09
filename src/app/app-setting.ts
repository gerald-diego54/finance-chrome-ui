import { environment } from './../environments/environment';

const ui_url = 'http://localhost:4200/';
const api_url = 'http://localhost:8000/';

export const AppSettings = {
    ui_url: environment.ui_url || ui_url,
    api_url: environment.api_url || api_url
}
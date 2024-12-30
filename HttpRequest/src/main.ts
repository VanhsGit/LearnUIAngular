import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpClient, HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { take, tap } from 'rxjs';

function loggin(
    request: HttpRequest<unknown>,
    next: HttpHandlerFn
){
    // const ref = request.clone({
    //     headers: request.headers.set('asdsad', '123')
    // });
    console.log("Out request");
    console.log(request);
    return next(request).pipe(
        tap({
            next: (val) => {
                if(val.type === HttpEventType.Response){
                    console.log("type Response");
                    console.log(val.status);
                    console.log(val.body);
                }
            }
        })
    );
}

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(
            withInterceptors([loggin])
        )]
}).catch((err) => console.error(err));

import { Inject } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../modules/shared/services/loader.service';

const noLoaderApis: string | string[] = [
];
const loaderRequireGetApi: string | string[] = [
]


export const LoaderInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>>  => {
    const requests: HttpRequest<any>[] = [];
    const loaderService: LoaderService = Inject(LoaderService);

    const removeRequest = (req: HttpRequest<any>) => {
        const i = requests.indexOf(req);
        if (i >= 0) {
            requests.splice(i, 1);
        }
        loaderService.isLoading.next(requests.length > 0);
    }


    if (loaderRequireGetApi.includes(req.url) || (req.url.indexOf(loaderRequireGetApi[3]) != -1)) { } else {if (req.method === 'GET') { return next(req); }}
        if (noLoaderApis.includes(req.url)) { return next(req); }
        requests.push(req);
        // loaderService.showLoading(`${req.url}_${requests.indexOf(req)}`);
        loaderService.isLoading.next(true);
        return Observable.create((observer: { next: (arg0: HttpResponse<any>) => void; error: (arg0: any) => void; complete: () => void; }) => {
            const subscription = next(req)
                .subscribe(
                    event => {
                        if (event instanceof HttpResponse) {
                            removeRequest(req);
                            observer.next(event);
                        }
                    },
                    err => {
                        removeRequest(req);
                        observer.error(err);
                    },
                    () => {
                        removeRequest(req);
                        observer.complete();
                    });
            // remove request from queue when cancelled
            return () => {
                removeRequest(req);
                subscription.unsubscribe();
            };
        });
}

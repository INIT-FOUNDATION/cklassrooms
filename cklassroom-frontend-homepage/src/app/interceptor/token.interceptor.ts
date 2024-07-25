import { inject } from '@angular/core';
import { HttpRequest, HttpInterceptorFn, HttpHandlerFn} from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';



export const TokenInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
    const deviceService =  inject(DeviceDetectorService)
    const deviceInfo = deviceService.getDeviceInfo();
    const isMobile = deviceService.isMobile();
    const isTablet = deviceService.isTablet();
    const isDesktopDevice = deviceService.isDesktop();
    let headers = {
        'uo-device-type': deviceInfo.deviceType,
        'uo-os': deviceInfo.os,
        'uo-os-version': deviceInfo.os_version,
        'uo-is-mobile': ''+isMobile,
        'uo-is-tablet': ''+isTablet,
        'uo-is-desktop': ''+isDesktopDevice,
        'uo-browser-version': deviceInfo.browser_version,
        'uo-browser': deviceInfo.browser
    };
    if (!request.url.includes("api.ipify.org")) {
        request = request.clone({
            setHeaders: headers
        });
    }
    return next(request);
}

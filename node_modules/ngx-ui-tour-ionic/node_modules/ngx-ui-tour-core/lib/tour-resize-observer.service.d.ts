import * as i0 from "@angular/core";
export declare class TourResizeObserverService {
    private readonly resizeElSubject;
    private readonly platformId;
    private readonly isResizeObserverSupported;
    private resizeObserver?;
    private readonly document;
    private readonly window;
    readonly resize$: import("rxjs").Observable<void | Event>;
    observeElement(target: Element): void;
    unobserveElement(target: Element): void;
    disconnect(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TourResizeObserverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TourResizeObserverService>;
}

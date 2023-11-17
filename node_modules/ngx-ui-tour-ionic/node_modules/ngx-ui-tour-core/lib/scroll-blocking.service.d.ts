import * as i0 from "@angular/core";
export declare class ScrollBlockingService {
    private isEnabled;
    private userScrollContainer;
    private readonly platformId;
    private readonly isBrowser;
    private readonly rendererFactory;
    private readonly renderer;
    enable(scrollContainer: string | HTMLElement): void;
    disable(): void;
    private toggleOverflow;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollBlockingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScrollBlockingService>;
}

import * as i0 from "@angular/core";
export declare class AnchorClickService {
    private readonly rendererFactory;
    private readonly renderer;
    private unListenToAnchorClickFn;
    removeListener(): void;
    addListener(anchorEl: HTMLElement, callback: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnchorClickService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnchorClickService>;
}

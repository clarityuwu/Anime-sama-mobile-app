import { ElementRef } from '@angular/core';
import { IStepOption } from './tour.service';
import * as i0 from "@angular/core";
export interface BackdropConfig {
    zIndex?: string;
    backgroundColor?: string;
    /**
     * Parent container CSS selector or html element reference. Set to fix backdrop stacking issues. Defaults to body.
     */
    parentContainer?: string | HTMLElement;
    /**
     * Offset in pixels to add space between the backdrop and the anchor element.
     */
    offset?: number;
}
export declare class TourBackdropService {
    private backdropElements;
    private targetHtmlElement;
    private step;
    private resizeSubscription;
    private isSpotlightClosed;
    private readonly rendererFactory;
    private readonly renderer;
    private readonly resizeObserverService;
    private readonly scrollingService;
    private readonly document;
    show(targetElement: ElementRef, step: IStepOption): void;
    closeSpotlight(): void;
    private setBackdropPosition;
    private subscribeToResizeEvents;
    close(): void;
    disconnectResizeObserver(): void;
    private removeBackdropElement;
    private applyStyles;
    private createBackdropStyles;
    private createBackdropElement;
    private createBackdropElements;
    private get parentContainer();
    static ɵfac: i0.ɵɵFactoryDeclaration<TourBackdropService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TourBackdropService>;
}

import { TourService } from './tour.service';
import * as i0 from "@angular/core";
export declare class TourHotkeyListenerComponent {
    readonly tourService: TourService;
    constructor(tourService: TourService);
    /**
     * Configures hot keys for controlling the tour with the keyboard
     */
    onEscapeKey(): void;
    onArrowRightKey(): void;
    onArrowLeftKey(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TourHotkeyListenerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TourHotkeyListenerComponent, "tour-hotkey-listener", never, {}, {}, never, ["*"], true, never>;
}

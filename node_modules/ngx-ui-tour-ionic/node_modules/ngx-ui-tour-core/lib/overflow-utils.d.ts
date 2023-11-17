export declare class OverflowUtils {
    static getVisibleSection(childRect: DOMRect, containerRect: DOMRect): DOMRect;
    static isHeightOverflowing(child: HTMLElement | DOMRect, container: HTMLElement | DOMRect): boolean;
    private static _isHeightOverflowing;
    private static _getOverlap;
}

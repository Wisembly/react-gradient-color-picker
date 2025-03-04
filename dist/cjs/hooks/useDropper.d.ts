declare const useDropper: (onSelect: (arg0: string) => void) => {
    coverUp: boolean;
    isPicking: boolean;
    getColorLegacy: (e: any) => void;
    getEyeDrop: () => void;
};
export { useDropper };

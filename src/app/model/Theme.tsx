export interface ITheme {
  width: number;
  height: number;
  minDimension: number;
  breakpoints: Breakpoints;
}

export type Breakpoint = "sm" | "md" | "lg" | number;

const breakpointPx = (breakpoint: Breakpoint): number => {
  switch (breakpoint) {
    case "sm":
      return 600;
    case "md":
      return 900;
    case "lg":
      return 1200;
    default:
      return breakpoint;
  }
};

class Breakpoints {
  up(breakpoint: Breakpoint | number): string {
    const pxValue = breakpointPx(breakpoint);
    return `(min-width:${pxValue}px)`;
  }

  down(breakpoint: Breakpoint): string {
    const pxValue = breakpointPx(breakpoint);
    return `(max-width:${pxValue}px)`;
  }
}

export default class Theme implements ITheme {
  width: number = 0;
  height: number = 0;
  minDimension: number = 0;
  breakpoints: Breakpoints;

  constructor() {
    this.breakpoints = new Breakpoints();
  }

  setWindowSize(width: number, height: number) {
    this.height = height;
    this.width = width;
    this.minDimension = Math.min(height, width);
  }
}

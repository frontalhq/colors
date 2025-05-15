export type ColorScale = {
  readonly [key: string]: string;
};

export type ColorPalette = {
  readonly gray: ColorScale;
  readonly blue: ColorScale;
  readonly red: ColorScale;
  readonly amber: ColorScale;
  readonly green: ColorScale;
  readonly teal: ColorScale;
  readonly purple: ColorScale;
  readonly pink: ColorScale;
};

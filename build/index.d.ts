declare const lightColors: {
    readonly gray: {
        readonly 100: "oklch(0 0% 95%)";
        readonly 200: "oklch(0 0% 92%)";
        readonly 300: "oklch(0 0% 90%)";
        readonly 400: "oklch(0 0% 92%)";
        readonly 500: "oklch(0 0% 79%)";
        readonly 600: "oklch(0 0% 66%)";
        readonly 700: "oklch(0 0% 56%)";
        readonly 800: "oklch(0 0% 49%)";
        readonly 900: "oklch(0 0% 40%)";
        readonly 1000: "oklch(0 0% 9%)";
    };
    readonly blue: {
        readonly 50: "oklch(97.32% 0.0141 251.56)";
        readonly 100: "oklch(96.29% 0.0195 250.59)";
        readonly 200: "oklch(94.58% 0.0293 249.85)";
        readonly 300: "oklch(91.58% 0.0473 245.12)";
        readonly 400: "oklch(82.75% 0.0979 248.48)";
        readonly 500: "oklch(73.08% 0.1583 248.13)";
        readonly 600: "oklch(57.61% 0.2508 258.23)";
        readonly 700: "oklch(51.51% 0.2399 257.85)";
        readonly 800: "oklch(53.18% 0.2399 256.99)";
        readonly 900: "oklch(26.67% 0.1099 254.34)";
    };
    readonly red: {
        readonly 50: "oklch(96.5% 0.0223 13.09)";
        readonly 100: "oklch(95.41% 0.0299 14.25)";
        readonly 200: "oklch(94.33% 0.0369 15.01)";
        readonly 300: "oklch(91.51% 0.0471 19.8)";
        readonly 400: "oklch(84.47% 0.1018 17.71)";
        readonly 500: "oklch(71.12% 0.1881 21.22)";
        readonly 600: "oklch(62.56% 0.2524 23.03)";
        readonly 700: "oklch(58.19% 0.2482 25.15)";
        readonly 800: "oklch(54.99% 0.232 25.29)";
        readonly 900: "oklch(24.8% 0.1041 18.86)";
    };
    readonly amber: {
        readonly 50: "oklch(97.48% 0.0331 85.79)";
        readonly 100: "oklch(96.81% 0.0495 90.24)";
        readonly 200: "oklch(95.93% 0.0636 90.52)";
        readonly 300: "oklch(91.02% 0.1322 88.25)";
        readonly 400: "oklch(86.55% 0.1583 79.63)";
        readonly 500: "oklch(80.25% 0.1953 73.59)";
        readonly 600: "oklch(81.87% 0.1969 76.46)";
        readonly 700: "oklch(77.21% 0.1991 64.28)";
        readonly 800: "oklch(52.79% 0.1496 54.65)";
        readonly 900: "oklch(30.83% 0.099 45.48)";
    };
    readonly green: {
        readonly 50: "oklch(97.59% 0.0289 145.42)";
        readonly 100: "oklch(96.92% 0.037 147.15)";
        readonly 200: "oklch(94.6% 0.0674 144.23)";
        readonly 300: "oklch(91.49% 0.0976 146.24)";
        readonly 400: "oklch(85.45% 0.1627 146.3)";
        readonly 500: "oklch(80.25% 0.214 145.18)";
        readonly 600: "oklch(64.58% 0.1746 147.27)";
        readonly 700: "oklch(57.81% 0.1507 147.5)";
        readonly 800: "oklch(51.75% 0.1453 147.65)";
        readonly 900: "oklch(29.15% 0.1197 147.38)";
    };
    readonly teal: {
        readonly 100: "oklch(97.72% 0.0359 186.7)";
        readonly 200: "oklch(97.06% 0.0347 180.66)";
        readonly 300: "oklch(94.92% 0.0478 182.07)";
        readonly 400: "oklch(92.76% 0.0718 183.78)";
        readonly 500: "oklch(86.88% 0.1344 182.42)";
        readonly 600: "oklch(81.5% 0.161 178.96)";
        readonly 700: "oklch(64.92% 0.1572 181.95)";
        readonly 800: "oklch(57.53% 0.1392 181.66)";
        readonly 900: "oklch(52.08% 0.1251 182.93)";
        readonly 1000: "oklch(32.11% 0.0788 179.82)";
    };
    readonly purple: {
        readonly 50: "oklch(96.65% 0.0244 312.19)";
        readonly 100: "oklch(96.73% 0.0228 309.8)";
        readonly 200: "oklch(94.85% 0.0364 310.15)";
        readonly 300: "oklch(91.77% 0.0614 312.82)";
        readonly 400: "oklch(81.26% 0.1409 310.8)";
        readonly 500: "oklch(72.07% 0.2083 308.19)";
        readonly 600: "oklch(55.5% 0.3008 306.12)";
        readonly 700: "oklch(48.58% 0.2638 305.73)";
        readonly 800: "oklch(47.18% 0.2579 304)";
        readonly 900: "oklch(23.96% 0.13 305.66)";
    };
    readonly pink: {
        readonly 50: "oklch(95.69% 0.0359 344.62)";
        readonly 100: "oklch(95.71% 0.0321 353.14)";
        readonly 200: "oklch(93.83% 0.0451 356.29)";
        readonly 300: "oklch(91.12% 0.0573 358.82)";
        readonly 400: "oklch(84.28% 0.0915 356.99)";
        readonly 500: "oklch(74.33% 0.1547 0.24)";
        readonly 600: "oklch(63.52% 0.238 1.01)";
        readonly 700: "oklch(59.51% 0.2339 4.21)";
        readonly 800: "oklch(53.5% 0.2058 2.84)";
        readonly 900: "oklch(26% 0.0977 359)";
    };
};
type LightColors = typeof lightColors;

declare const darkColors: {
    readonly gray: {
        readonly 100: "oklch(0 0% 95%)";
        readonly 200: "oklch(0 0% 92%)";
        readonly 300: "oklch(0 0% 90%)";
        readonly 400: "oklch(0 0% 92%)";
        readonly 500: "oklch(0 0% 79%)";
        readonly 600: "oklch(0 0% 66%)";
        readonly 700: "oklch(0 0% 56%)";
        readonly 800: "oklch(0 0% 49%)";
        readonly 900: "oklch(0 0% 40%)";
        readonly 1000: "oklch(0 0% 9%)";
    };
    readonly blue: {
        readonly 50: "oklch(22.17% 0.069 259.89)";
        readonly 100: "oklch(25.45% 0.0811 255.8)";
        readonly 200: "oklch(30.86% 0.1022 255.21)";
        readonly 300: "oklch(34.1% 0.121 254.74)";
        readonly 400: "oklch(38.5% 0.1403 254.4)";
        readonly 500: "oklch(64.94% 0.1982 251.81)";
        readonly 600: "oklch(57.61% 0.2321 258.23)";
        readonly 700: "oklch(51.51% 0.2307 257.85)";
        readonly 800: "oklch(71.7% 0.1648 250.79)";
        readonly 900: "oklch(96.75% 0.0179 242.42)";
    };
    readonly red: {
        readonly 50: "oklch(22.1% 0.0657 15.11)";
        readonly 100: "oklch(25.93% 0.0834 19.02)";
        readonly 200: "oklch(31.47% 0.1105 20.96)";
        readonly 300: "oklch(35.27% 0.1273 21.23)";
        readonly 400: "oklch(40.68% 0.1479 23.16)";
        readonly 500: "oklch(62.56% 0.2277 23.03)";
        readonly 600: "oklch(62.56% 0.2234 23.03)";
        readonly 700: "oklch(58.01% 0.227 25.12)";
        readonly 800: "oklch(69.96% 0.2136 22.03)";
        readonly 900: "oklch(95.6% 0.0293 6.61)";
    };
    readonly amber: {
        readonly 50: "oklch(22.46% 0.0538 76.04)";
        readonly 100: "oklch(24.95% 0.0642 64.78)";
        readonly 200: "oklch(32.34% 0.0837 63.83)";
        readonly 300: "oklch(35.53% 0.0903 66.3)";
        readonly 400: "oklch(41.55% 0.1044 67.98)";
        readonly 500: "oklch(75.04% 0.1737 74.49)";
        readonly 600: "oklch(81.87% 0.1969 76.46)";
        readonly 700: "oklch(77.21% 0.1991 64.28)";
        readonly 800: "oklch(77.21% 0.1991 64.28)";
        readonly 900: "oklch(96.7% 0.0418 84.59)";
    };
    readonly green: {
        readonly 50: "oklch(23.09% 0.0716 149.68)";
        readonly 100: "oklch(27.12% 0.0895 150.09)";
        readonly 200: "oklch(29.84% 0.096 149.25)";
        readonly 300: "oklch(34.39% 0.1039 147.78)";
        readonly 400: "oklch(44.19% 0.1484 147.2)";
        readonly 500: "oklch(58.11% 0.1815 146.55)";
        readonly 600: "oklch(64.58% 0.199 147.27)";
        readonly 700: "oklch(57.81% 0.1776 147.5)";
        readonly 800: "oklch(73.1% 0.2158 148.29)";
        readonly 900: "oklch(96.76% 0.056 154.18)";
    };
    readonly teal: {
        readonly 50: "oklch(22.1% 0.0544 178.74)";
        readonly 100: "oklch(25.06% 0.062 178.76)";
        readonly 200: "oklch(31.5% 0.0767 180.99)";
        readonly 300: "oklch(32.43% 0.0763 180.13)";
        readonly 400: "oklch(43.35% 0.1055 180.97)";
        readonly 500: "oklch(60.71% 0.1485 180.24)";
        readonly 600: "oklch(64.92% 0.1403 181.95)";
        readonly 700: "oklch(57.53% 0.1392 181.66)";
        readonly 800: "oklch(74.56% 0.1765 182.8)";
        readonly 900: "oklch(96.46% 0.056 180.29)";
    };
    readonly purple: {
        readonly 50: "oklch(22.34% 0.0779 316.87)";
        readonly 100: "oklch(25.91% 0.0921 314.41)";
        readonly 200: "oklch(31.98% 0.1219 312.41)";
        readonly 300: "oklch(35.93% 0.1504 309.78)";
        readonly 400: "oklch(40.99% 0.1721 307.92)";
        readonly 500: "oklch(55.5% 0.2191 306.12)";
        readonly 600: "oklch(55.5% 0.2186 306.12)";
        readonly 700: "oklch(48.58% 0.2102 305.73)";
        readonly 800: "oklch(69.87% 0.2037 309.51)";
        readonly 900: "oklch(96.1% 0.0304 316.46)";
    };
    readonly pink: {
        readonly 50: "oklch(22.67% 0.0628 354.73)";
        readonly 100: "oklch(26.2% 0.0859 356.68)";
        readonly 200: "oklch(31.15% 0.1067 355.93)";
        readonly 300: "oklch(32.13% 0.1174 356.71)";
        readonly 400: "oklch(37.01% 0.1453 358.39)";
        readonly 500: "oklch(50.33% 0.2089 4.33)";
        readonly 600: "oklch(63.52% 0.2346 1.01)";
        readonly 700: "oklch(59.51% 0.2429 4.21)";
        readonly 800: "oklch(69.36% 0.2223 3.91)";
        readonly 900: "oklch(95.74% 0.0326 350.08)";
    };
};
type DarkColors = typeof darkColors;

export { type DarkColors, type LightColors, darkColors, lightColors };

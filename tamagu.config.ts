import { themes, tokens } from "@tamagui/themes";
import { shorthands } from "@tamagui/shorthands";
import { createInterFont } from "@tamagui/font-inter";
import { createMedia } from "@tamagui/react-native-media-driver";
import { createFont, createTamagui, createTokens } from "tamagui";
import { createAnimations } from "@tamagui/animations-react-native";

const fontCommon = {
    face: {
        700: { normal: "InterBold" },
    },
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const ArchivoFont = {
    face: {
        700: {
            normal: "ArchivoFont",
            italic: "Plus-Jakarta-Sans-Light-Italic",
        },
    },
};
const headingFont = createInterFont(fontCommon);
const bodyFont = createInterFont(fontCommon);
const bodyFont2 = createFont({
    family: "Archivo",
    size: {
        1: 12,
        2: 14,
        3: 15,
    },
    lineHeight: {
        1: 17,
        2: 22,
        3: 25,
    },
});

export const animations = createAnimations({
    "100ms": {
        type: "timing",
        duration: 100,
    },
    bouncy: {
        damping: 9,
        mass: 0.9,
        stiffness: 150,
    },
    lazy: {
        damping: 18,
        stiffness: 50,
    },
    medium: {
        damping: 15,
        stiffness: 120,
        mass: 1,
    },
    slow: {
        damping: 15,
        stiffness: 40,
    },
    quick: {
        damping: 20,
        mass: 1.2,
        stiffness: 250,
    },
    tooltip: {
        damping: 10,
        mass: 0.9,
        stiffness: 100,
    },
});

const customTokens = createTokens({
    ...tokens,
    color: {
        ...tokens.color,
        primary: "#E8BD70",
        primaryLight: "#332F2B",
        secondary: "blue",
        disabledButtonBase: "#565656",
        disabledButtonText: "#AAAAAA",
        danger: "#FD1D1D",
        dangerBase: "#fea5a5",
        primaryText: "#FFFFFF",
        secondaryText: "#808080",
        successBase: "#d0f7ed",
        successText: "#078c68",
    },
});

const config = createTamagui({
    defaultFont: "body",
    animations,
    defaultTheme: "dark",
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: false,
    shorthands,
    fonts: {
        heading: headingFont,
        body: bodyFont,
        Archivo: bodyFont2,
    },
    themes: {
        ...themes,
        dark: {
            background: "#000000",
            lightBg: "#101010",
            secondaryBackground: "#212124",
            primaryText: "#FFFFFF",
            secondaryText: "#808080",
            backgroundColor: "#000000",
            backgroundHover: "#161618",
            backgroundPress: "#161618",
            backgroundFocus: "#000000",
            backgroundTransparent: tokens.color.gray1Light,
            borderColor: "#505058",
            borderColorHover: "#161618",
            borderColorPress: "#161618",
            borderColorFocus: "#505058",
            color: "#FFFFFF",
            colorHover: "#37373a",
            colorPress: "#37373a",
            colorFocus: "#37373a",
            shadowColor: "#505058",
            shadowColorHover: "#37373a",
            shadowColorPress: "#37373a",
            shadowColorFocus: "#37373a",
            placeHolderText: "#808080",
            placeholderColor: "#808080",
            placeholderTextColor: "#808080",
            success: "#4BB543",
        },
        light: {
            background: "#FFFFFF",
            lightBg: "#101010",
            secondaryBackground: "#f2f2f7",
            primaryText: "#000000",
            secondaryText: "#808080",
            backgroundColor: "#FFFFFF",
            backgroundHover: "#161618",
            backgroundPress: "#161618",
            backgroundFocus: "#FFFFFF",
            backgroundTransparent: tokens.color.gray1Light,
            borderColor: "#000000",
            borderColorHover: "#161618",
            borderColorPress: "#161618",
            borderColorFocus: "#FFFFFF",
            color: "#000000",
            colorHover: "#818181",
            colorPress: "#818181",
            colorFocus: "#818181",
            shadowColor: "#818181",
            shadowColorHover: "#818181",
            shadowColorPress: "#818181",
            shadowColorFocus: "#818181",
            placeHolderText: "#808080",
            placeholderColor: "#808080",
            placeholderTextColor: "#808080",
            success: "#4BB543",
        },
    },
    tokens: customTokens,
    media: createMedia({
        xs: { maxWidth: 660 },
        sm: { maxWidth: 800 },
        md: { maxWidth: 1020 },
        lg: { maxWidth: 1280 },
        xl: { maxWidth: 1420 },
        xxl: { maxWidth: 1600 },
        gtXs: { minWidth: 660 + 1 },
        gtSm: { minWidth: 800 + 1 },
        gtMd: { minWidth: 1020 + 1 },
        gtLg: { minWidth: 1280 + 1 },
        short: { maxHeight: 820 },
        tall: { minHeight: 820 },
        hoverNone: { hover: "none" },
        pointerCoarse: { pointer: "coarse" },
    }),
});

export type AppConfig = typeof config;

declare module "tamagui" {
    // overrides TamaguiCustomConfig so your custom types
    // work everywhere you import `tamagui`
    // rome-ignore lint/suspicious/noEmptyInterface: <explanation>
    interface TamaguiCustomConfig extends AppConfig {}
}

export default config;

const fontPath = `../assets/fonts/Montserrat/Montserrat-`;

export const fontsRequired = {
  "primary": require(`${fontPath}Medium.ttf`),
  "secondary": require(`${fontPath}Thin.ttf`),
  "italicP": require(`${fontPath}BoldItalic.ttf`),
  "boldP": require(`${fontPath}ExtraBold.ttf`),
};

// object below yields:
// 'TypeError: undefined is not an object (evaluating'_fonts.default.primary')'
const fonts = {
  primary: "Montserrat_500Medium",
  // secondary: "Montserrat_500Medium_Italic",
  // bold: "Montserrat_900Black",
  // italic: "Montserrat_500Medium_Italic",
  // headings: 'Alegreya SC, 31.5',
  // subheadings: 'Alegreya Sans, Regular 18',
  // body: 'Alegreya Sans SC Regular, 12'
};

// objects below unused as of 1007 on 16 July,
// preserved as potentially useful future idea
/*
const fontImport = () => {
  return `import {
    useFonts,
    Montserrat_500Medium_Italic,
    Montserrat_500Medium,
    Montserrat_900Black,
  } from "@expo-google-fonts/dev";`;
};

const fonts = {
  primary: "Montserrat_500Medium",
  secondary: "Montserrat_500Medium_Italic",
  bold: "Montserrat_900Black",
  italic: "Montserrat_500Medium_Italic",
  // headings: 'Alegreya SC, 31.5',
  // subheadings: 'Alegreya Sans, Regular 18',
  // body: 'Alegreya Sans SC Regular, 12'
};

const projectFonts = {
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_900Black,
};

export { fontImport, fonts, projectFonts };
*/

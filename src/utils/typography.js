import Typography from "typography"

const typography = new Typography({
  baseFontSize: "10px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto", "Helvetica Neue"],
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '400',
        '700'
      ]
    }
  ]
})

export default typography
import { Global } from "@emotion/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"

export const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Euphoria+Script&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap');

    @keyframes move-up {
      0% {transform: translateY(0px);}
      70% {transform: translateY(-10px);}
      100% {transform: translateY(0px);}
    }
    `}
  />
)

const fonts = {
  special: `'Rouge Script', cursive`,
  mono: `'Menlo', monospace`,
}

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
})

export default theme

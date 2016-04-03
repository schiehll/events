import ColorManipulator from 'material-ui/lib/utils/color-manipulator'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import colors from '+/assets/styles/variables/colors.pcss'

export default getMuiTheme({
  palette: {
    primary1Color: colors.primary,
    primary2Color: colors.darkPrimary,
    primary3Color: colors.lightPrimary,
    accent1Color: colors.accent,
    accent2Color: colors.accent,
    accent3Color: colors.accent,
    textColor: colors.text,
    alternateTextColor: colors.alternateText,
    canvasColor: colors.alternateText,
    borderColor: colors.diviver,
    disabledColor: ColorManipulator.fade(colors.text, 0.3),
    pickerHeaderColor: colors.darkPrimary
  }
})
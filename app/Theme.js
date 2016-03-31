import ColorManipulator from 'material-ui/lib/utils/color-manipulator'
import Spacing from 'material-ui/lib/styles/spacing'
import zIndex from 'material-ui/lib/styles/zIndex'
import colors from '+/assets/styles/variables/colors.pcss'

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto',
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
}
import microI18n from 'micro-i18n'

class I18n {
  t(key : string, args : Object = {}) : string {
    return microI18n.t(key, args)
  }

  setLang(lang : Object) : void {
    microI18n.setLang(lang.default)
  }

  loadLangData(locale : string) : Function {
    this.locale = locale
    return require(`promise?global,./lang/[name]!babel!../lang/${locale}.js`)
  }
}

export default new I18n
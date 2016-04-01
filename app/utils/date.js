import i18n from '+/core/i18n'

export const formatDate = (date : string) : string => {
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false
  }
  const formatedDate = new Intl.DateTimeFormat(i18n.locale, options).format(new Date(date))
  return formatedDate.replace(' ', ' - ')
}
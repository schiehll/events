import i18n from '+/core/i18n'

export const formatDateAndTime = (date : Date) : string => {
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false
  }
  const formatedDate = new Intl.DateTimeFormat(i18n.locale, options).format(date)
  return formatedDate.replace(' ', ' - ')
}

export const formatDate = (date : Date) : string => {
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric'
  }
  return new Intl.DateTimeFormat(i18n.locale, options).format(date)
}

export const formatTime = (date : Date) : string => {
  const options = {
    hour: 'numeric', minute: 'numeric',
    hour12: false
  }
  return new Intl.DateTimeFormat(i18n.locale, options).format(date)
}
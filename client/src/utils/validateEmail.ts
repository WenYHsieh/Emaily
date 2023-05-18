const EMAIL_RE =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails: string) => {
  if (!emails) return ''

  const invalidEmailArray = emails
    ?.split(',')
    ?.map((email) => email.trim())
    ?.filter(Boolean)
    ?.filter((email) => {
      return EMAIL_RE.test(email) === false
    })

  if (invalidEmailArray.length === 0) return ''
  return `These email are INVALID: ${invalidEmailArray.join(', ')}`
}

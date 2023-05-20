export interface ISurveyForm {
  title: string
  subject: string
  body: string
  emails: string
}

export const formField = [
  { name: 'title', label: 'Campaign title' },
  { name: 'subject', label: 'Survey Line' },
  { name: 'body', label: 'Email body' },
  { name: 'emails', label: 'recipients' },
] as Array<{ name: keyof ISurveyForm; label: string }>

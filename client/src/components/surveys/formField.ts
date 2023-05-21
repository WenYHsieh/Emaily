export interface ISurveyForm {
  title: string
  subject: string
  body: string
  recipients: string
}

export const formField = [
  { name: 'title', label: 'Campaign title' },
  { name: 'subject', label: 'Survey Line' },
  { name: 'body', label: 'Email body' },
  { name: 'recipients', label: 'recipients' },
] as Array<{ name: keyof ISurveyForm; label: string }>

export function formatDate (dateString) {
  // TODO extra formatting: bullet point, remove comma
  const date = new Date(dateString)
  const formattedDate = date.toLocaleString('et-ET', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return formattedDate
}

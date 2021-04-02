import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    if (dateString != null) {
        return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    } else {
        return null
    }
}
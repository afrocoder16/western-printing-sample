import { Link } from 'react-router-dom'

// The four-stroke process-color mark (yellow, magenta, cyan, black), echoing Western's own logo.
export function WesternMark({ className = '', title }) {
  return (
    <svg className={className} viewBox="0 0 64 44" role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : 'true'} focusable="false">
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4c5-1.6 8.6 1.4 7.6 6.6-.9 4.7-1.2 9.6.3 14.2 1 3.2.1 6-2.9 7.4-3.6 1.7-7.4-.7-7.9-4.9C5.4 18.3 5.1 10.5 9 4Z" fill="#FFE600" />
        <path d="M25 3c5-1.4 8.8 1.3 7.8 6.4-.9 4.6-1.1 9.7.4 14.5 1 3.2.2 6.1-2.8 7.5-3.5 1.7-7.3-.6-7.9-4.8C21.3 17.9 21 10 25 3Z" fill="#EC008C" />
        <path d="M41 3c5-1.4 8.7 1.3 7.7 6.4-.9 4.7-1.1 9.6.4 14.4 1 3.2.2 6.1-2.8 7.5-3.5 1.7-7.3-.6-7.9-4.8C37.3 17.8 37 10 41 3Z" fill="#00AEEF" />
        <path d="M56.5 2.5c4.6-1.5 8.2 1.1 7.3 6.2-.8 4.5-.9 9.2.5 13.9.9 3.1.2 5.9-2.6 7.2-3.3 1.6-6.9-.5-7.5-4.5-.7-6.6-.9-14.3 2.3-22.8Z" fill="#231F20" />
      </g>
    </svg>
  )
}

export default function Logo({ footer = false }) {
  return (
    <Link to="/" className={`logo ${footer ? 'logo--footer' : ''}`} aria-label="Western Printing, Marshall MN. Home">
      <WesternMark className="logo__mark" />
      <span className="logo__type">
        <strong>Western</strong>
        <em>Printing</em>
        <small>Print · Signs · Promotional · Design</small>
      </span>
    </Link>
  )
}

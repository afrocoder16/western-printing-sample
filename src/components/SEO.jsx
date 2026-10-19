import { useEffect } from 'react'
import { addressLine, site } from '../site'

// Sets the page title, description, canonical URL, and (optionally) a JSON-LD block for the page.
export default function SEO({ title, description, path, schema }) {
  useEffect(() => {
    document.title = `${title} | ${site.name} | Marshall, MN`

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = `${description} Visit ${site.name} at ${addressLine}.`

    if (path) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = `${site.url}${path}`
    }

    let script = null
    if (schema) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.pageSchema = 'true'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }
    return () => script?.remove()
  }, [title, description, path, schema])

  return null
}

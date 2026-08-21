import {
  useId,
  useState,
  type FormEvent,
  type ChangeEvent,
} from 'react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/content'

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = 'Tell us a bit more (at least 20 characters).'
  }

  return errors
}

export function Contact() {
  const formId = useId()
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status === 'success') setStatus('idle')
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(
      `Project inquiry from ${values.name}${values.company ? ` (${values.company})` : ''}`,
    )
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || '—'}\n\n${values.message}`,
    )

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
    setStatus('success')
    setValues(initialState)
  }

  return (
    <section className="section contact" id="contact">
      <div className="section-inner contact-inner">
        <Reveal as="p" className="eyebrow">
          Next step
        </Reveal>
        <Reveal as="h2" className="section-title">
          Ready to build something that works?
        </Reveal>
        <Reveal as="p" className="section-lead">
          Tell us about your product, workflow, or modernization goal—we’ll help
          you turn it into software that delivers measurable results.
        </Reveal>

        <Reveal className="contact-form-wrap" delay={2}>
          <div className="contact-form-card">
            <div className="contact-form-header">
              <span className="contact-form-badge">Get in touch</span>
              <p>Share a few details and we’ll respond within one business day.</p>
            </div>

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor={`${formId}-name`}>Name</label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                  />
                  {errors.name ? (
                    <p className="field-error" id={`${formId}-name-error`} role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor={`${formId}-email`}>Email</label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  />
                  {errors.email ? (
                    <p className="field-error" id={`${formId}-email-error`} role="alert">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="field">
                <label htmlFor={`${formId}-company`}>Company (optional)</label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  autoComplete="organization"
                  placeholder="Your company name"
                  value={values.company}
                  onChange={onChange}
                />
              </div>

              <div className="field">
                <label htmlFor={`${formId}-message`}>How can we help?</label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={5}
                  placeholder="Describe your project, timeline, or challenge..."
                  value={values.message}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? `${formId}-message-error` : undefined
                  }
                />
                {errors.message ? (
                  <p className="field-error" id={`${formId}-message-error`} role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="form-actions">
                <Button type="submit" className="contact-submit">
                  Send inquiry
                </Button>
                <a className="mailto-fallback" href={`mailto:${siteConfig.contactEmail}`}>
                  or email {siteConfig.contactEmail}
                </a>
              </div>

              {status === 'success' ? (
                <p className="form-success" role="status">
                  Opening your email client… If nothing happens, use the address above.
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

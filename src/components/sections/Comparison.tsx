import { Reveal } from '@/components/ui/Reveal'
import { comparisonColumns, comparisonRows, siteConfig } from '@/data/content'

function StarIcon() {
  return (
    <svg
      className="compare-star"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      className="compare-icon compare-icon--yes"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg
      className="compare-icon compare-icon--no"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 9l6 6M15 9l-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

type ComparisonCellProps = {
  positive: boolean
  text: string
}

function ComparisonCell({ positive, text }: ComparisonCellProps) {
  return (
    <div className="compare-cell">
      {positive ? <CheckIcon /> : <CrossIcon />}
      <span>{text}</span>
    </div>
  )
}

export function Comparison() {
  return (
    <section className="section comparison" id="comparison" aria-labelledby="comparison-heading">
      <div className="section-inner comparison-inner">
        <Reveal as="h2" id="comparison-heading" className="section-title comparison-title">
          What Makes Us Different
        </Reveal>
        <Reveal as="p" className="section-lead comparison-lead" delay={1}>
          Why leading businesses choose us over hiring or outsourcing elsewhere?
        </Reveal>

        <Reveal className="compare-card" delay={2}>
          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-feature-col" scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {comparisonColumns.map((column) => (
                    <th
                      key={column.id}
                      scope="col"
                      className={column.featured ? 'compare-brand-col' : undefined}
                    >
                      {column.featured ? (
                        <span className="compare-brand-head">
                          <StarIcon />
                          <span>{siteConfig.name}</span>
                        </span>
                      ) : (
                        column.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th className="compare-feature-col" scope="row">
                      {row.label}
                    </th>
                    {comparisonColumns.map((column) => {
                      const cell = row.values[column.id]
                      return (
                        <td
                          key={column.id}
                          className={column.featured ? 'compare-brand-col' : undefined}
                        >
                          <ComparisonCell positive={cell.positive} text={cell.text} />
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

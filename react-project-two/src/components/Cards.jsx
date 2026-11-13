import './CardCSS.css'

const Card = ({ title = 'Technology' }) => {
  return (
    <article className="course-card">
      <div className="course-card__art" aria-hidden="true">
        <span className="course-card__mark">{title.slice(0, 2).toUpperCase()}</span>
        <span className="course-card__orb course-card__orb--one" />
        <span className="course-card__orb course-card__orb--two" />
        <span className="course-card__code">&lt; / &gt;</span>
      </div>

      <div className="course-card__content">
        <div className="course-card__eyebrow">
          <span className="course-card__status" />
          LEARNING PATH
        </div>
        <h2>{title}</h2>
        <p className="course-card__description">
          Build your skills and explore what you can create with {title}.
        </p>
        <div className="course-card__footer">
          <span className="course-card__level">ALL LEVELS</span>
          <span className="course-card__arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>
  )
}

export const AuthorCard = ({ name, title }) => {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="author-card">
      <div className="author-card__top">
        <span className="author-card__badge">AUTHOR</span>
        <span className="author-card__sparkle" aria-hidden="true">✦</span>
      </div>
      <div className="author-card__profile">
        <div className="author-card__avatar" aria-hidden="true">
          {initials}
        </div>
        <div className="author-card__content">
          <h3>{name}</h3>
          <p className="author-card__title">{title}</p>
        </div>
      </div>
      <div className="author-card__footer">
        <span>Sharing knowledge, one idea at a time</span>
        <span className="author-card__arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  )
}

export const DemoCard = (props) => {
    return (
        <div className="demo-card" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Card
import './App.css'
import Card, { AuthorCard,DemoCard } from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {
  const technologies = [
    'C',
    'C++',
    'Java',
    'Python',
    'JavaScript',
    'React',
    'MongoDB',
    'SQL',
    'HTML',
    'CSS',
  ]

  const authors = [
    { name: 'John Doe', title: 'Senior Developer' },
    { name: 'Jane Smith', title: 'UI/UX Designer' },
    { name: 'Michael Johnson', title: 'Full Stack Engineer' },
    { name: 'Debajit', title: 'Software Engineer' },
  ]

  return (
    <>
      <NavBar />
      <main className="card-page">
        <h1>
          My Favorite Programming
          <br />
          Languages and Technologies
        </h1>
        <section
          className="card-grid"
          aria-label="Programming languages and technologies"
        >
          {technologies.map((item) => (
            <Card key={item} title={item} />
          ))}
        </section>
        <section className="author-section" aria-labelledby="authors-heading">
          <div className="author-section__heading">
            <p className="author-section__eyebrow">THE PEOPLE BEHIND THE CODE</p>
            <h2 id="authors-heading">Meet the authors</h2>
            <p>Learn from the people who make technology easier to understand.</p>
          </div>
          <div className="author-grid">
            {authors.map((author) => (
              <AuthorCard key={author.name} {...author} />
            ))}
          </div>
        </section>
      </main>

      <DemoCard title="Demo Card" description="This is a demo card component." />
    </>
  )
}

export default App

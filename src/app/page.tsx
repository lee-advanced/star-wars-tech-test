import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid place-content-center text-center px-8">
      <h1 className="text-6xl font-bold mb-8">Homepage</h1>
      <p>
        Welcome to this example Application. You can see the list of films
        required for the test by clicking films in the navigation above or on{' '}
        <span className="text-red-600 hover:border-b hover:border-red-600">
          <Link href="/films">this link</Link>
        </span>
      </p>
    </div>
  )
}

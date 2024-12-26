export default function Header() {
  return (
    <header className="flex justify-between items-center px-32 py-10">
      <h1 className="primary-text text-2xl font-bold">Red</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              className="button-primary"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </a>
          </li>
        </ul>
        </nav>
    </header>
    );
}
export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Red</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              className="text-blue-600 b hover:underline"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </li>
        </ul>
        </nav>
    </header>
    );
}
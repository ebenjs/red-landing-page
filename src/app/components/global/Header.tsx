export default function Header() {
  return (
    <header className="flex justify-between items-center px-32 2xl:px-72 py-6">
      <h1 className="primary-text text-4xl font-bold flex align-center justify-center gap-6">
        <img src="/images/logo2.png" alt="Red app logo" className="w-10 border rounded-xl"/>
        <span>Red</span>
      </h1>
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
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#work", label: "work" },
  { href: "/#agents", label: "agents" },
  { href: "/#log", label: "log" },
  { href: "/#stack", label: "stack" },
  { href: "/#contact", label: "contact" }
];

export default function StatusBar() {
  return (
    <header className="statusbar">
      <Link href="/" className="statusbar__brand">
        <span className="dot dot--live" aria-hidden="true" />
        ones<span className="muted">@</span>portfolio
        <span className="muted">:~$</span>
      </Link>
      <nav aria-label="Main">
        <ul className="statusbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}

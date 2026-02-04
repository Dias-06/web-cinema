// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-4">
        {/* Лого */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Kino<span className="text-zinc-400">Study</span>
        </Link>

        {/* Навигация */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/">Главная</NavLink>
          <NavLink href="/movies">Фильмы</NavLink>
          <NavLink href="/cartoons">Мультфильмы</NavLink>
          <NavLink href="/series">Сериалы</NavLink>
        </nav>

        {/* Правая часть */}
        <div className="ml-auto flex items-center gap-2">
          {/* Поиск */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Поиск..."
              className="h-10 w-64 rounded-lg border border-zinc-800 bg-zinc-900 px-3 pr-10 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-700"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
              ⌕
            </span>
          </div>

          {/* Кнопка аккаунта */}
          <button
            type="button"
            className="h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-4 text-sm font-medium hover:bg-zinc-800"
          >
            Аккаунт
          </button>

          {/* Бургер (просто для вида, без логики) */}
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 px-3 hover:bg-zinc-800 md:hidden"
            aria-label="Меню"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Мобильная навигация (просто видимая строка, без открытия/закрытия) */}
      <div className="border-t border-zinc-800 md:hidden">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 py-3">
          <MobileNavLink href="/">Главная</MobileNavLink>
          <MobileNavLink href="/movies">Фильмы</MobileNavLink>
          <MobileNavLink href="/cartoons">Мультфильмы</MobileNavLink>
          <MobileNavLink href="/series">Сериалы</MobileNavLink>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 pb-4 sm:hidden">
          <input
            type="text"
            placeholder="Поиск..."
            className="h-10 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-700"
          />
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-200 hover:bg-zinc-800"
    >
      {children}
    </Link>
  );
}

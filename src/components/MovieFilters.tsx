// components/MovieFilters.tsx
import SelectDropdown from "./SelectDropdown";

const GENRES = [
  "Все жанры",
  "Боевик",
  "Комедия",
  "Драма",
  "Триллер",
  "Ужасы",
  "Фантастика",
  "Фэнтези",
  "Мелодрама",
  "Детектив",
  "Приключения",
  "Анимация",
];

const YEARS = [
  "Любой год",
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2010–2019",
  "2000–2009",
  "1990–1999",
  "До 1990",
];

const RATINGS = [
  "Любой рейтинг",
  "9+",
  "8+",
  "7+",
  "6+",
  "5+",
  "До 5",
];

export default function MovieFilters() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
          <SelectDropdown
            label="Жанр"
            placeholder="Выбери жанр"
            options={GENRES.map((g) => ({ label: g }))}
          />
          <SelectDropdown
            label="Год"
            placeholder="Выбери год"
            options={YEARS.map((y) => ({ label: y }))}
          />
          <SelectDropdown
            label="Рейтинг"
            placeholder="Выбери рейтинг"
            options={RATINGS.map((r) => ({ label: r }))}
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-4 text-sm text-zinc-200 hover:bg-zinc-800"
          >
            Сбросить
          </button>
          <button
            type="button"
            className="h-10 rounded-lg bg-white px-4 text-sm font-medium text-black hover:bg-zinc-200"
          >
            Применить
          </button>
        </div>
      </div>

      <div className="mt-3 text-xs text-zinc-500">
        * Пока это только верстка. Позже заменим на реальные query-параметры.
      </div>
    </section>
  );
}

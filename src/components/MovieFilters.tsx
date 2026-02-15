// components/MovieFilters.tsx
import SelectDropdown from "./SelectDropdown";

const GENRES = [
  { id: "0", value: "Все жанры" },
  { id: "11", value: "Боевик" },
  { id: "13", value: "Комедия" },
  { id: "2", value: "Драма" },
  { id: "1", value: "Триллер" },
  { id: "17", value: "Ужасы" },
  { id: "6", value: "Фантастика" },
  { id: "12", value: "Фэнтези" },
  { id: "4", value: "Мелодрама" },
  { id: "5", value: "Детектив" },
  { id: "7", value: "Приключения" },
  { id: "24", value: "Аниме" },
];


export default function MovieFilters() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
          <SelectDropdown
            label="Жанр"
            labelVal="genre"
            placeholder="Выбери жанр"
            options={GENRES.map((g) => (g))}
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

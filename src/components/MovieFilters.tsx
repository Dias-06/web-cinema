// components/MovieFilters.tsx
import SelectDropdown from "./SelectDropdown";

const GENRES = [
  { id: "x", value: "Все жанры" },
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
const RATINGS = [
  { id: "x", value: "0" },
  { id: "1", value: "1" },
  { id: "2", value: "2" },
  { id: "3", value: "3" },
  { id: "4", value: "4" },
  { id: "5", value: "5" },
  { id: "6", value: "6" },
  { id: "7", value: "7" },
  { id: "8", value: "8" },
  { id: "9", value: "9" },
  { id: "10", value: "10" },
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
            options={GENRES}
          />
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
          <SelectDropdown
            label="Рейтинг" 
            labelVal="ratingFrom"
            placeholder="Выбери рейтинг(от)"
            options={RATINGS}
          />
        </div>
        
        <div className="flex gap-2">
          <button
            type="button"
            className="caret-transparent h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-4 text-sm text-zinc-200 hover:bg-zinc-800"
          >
            Сбросить
          </button>
          <button
            type="button"
            className="caret-transparent h-10 rounded-lg bg-white px-4 text-sm font-medium text-black hover:bg-zinc-200"
          >
            Применить
          </button>
        </div>
      </div>
    </section>
  );
}

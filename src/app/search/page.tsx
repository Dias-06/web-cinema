// app/search/page.tsx
import { MovieCardProps } from "@/components/MovieCard";
import MovieFilters from "@/components/MovieFilters";
import { Counrty } from "@/components/MovieHero";
import Pagination from "@/components/Pagination"
import SearchBar from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import { kpFetch } from "@/lib/kpFetch";
interface SearchPageProps{
  searchParams: Promise<{
    query: string,
    page: string
  }>
}
export interface Film extends MovieCardProps {
  filmId: number,
  description: string,
  rating: string,
  type?: string,
  countries: Counrty[],
  year: string
}
export default async function SearchPage(props : SearchPageProps) {
  const {query,page} = await props.searchParams;
  const data = await kpFetch(`films/search-by-keyword?keyword=${query}&page=${page}`,"v2.1")
  return (
    <div className="space-y-8 px-4">
      {/* Заголовок */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Поиск</h1>
        <p className="text-sm text-zinc-400">
          Найди фильм по названию и отфильтруй по жанру, году и рейтингу.
        </p>
      </div>

      {/* Поле поиска */}
      <SearchBar />

      {/* Фильтры (те же, что на /movies) */}
      <MovieFilters />

      {/* Результаты */}
      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-400">
            Результаты: <span className="text-zinc-200">{query}</span> · {data.searchFilmsCountResult} найдено
          </div>

          <div className="text-sm text-zinc-400">
            Сортировка: <span className="text-zinc-200">по релевантности</span>
          </div>
        </div>

        <div className="grid gap-3">
          {data.films.map((film:Film) => (
            <SearchResultCard key={film.filmId} film={film} />
          ))}
        </div>
      </section>

      {/* Пагинация (та же, что на /movies) */}
      <Pagination />
    </div>
  );
}

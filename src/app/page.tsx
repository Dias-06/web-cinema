import MovieSection from "@/components/MovieSection";
import { kpFetch } from "@/lib/kpFetch";
export default async function HomePage() {
  const popularSeries = await kpFetch("films/collections?type=POPULAR_SERIES&page=1")
  const topFilms = await kpFetch('films/collections?type=TOP_250_MOVIES&page=1')
  return (
    <div className="space-y-12">
      {/* Hero-блок */}
      <section className="relative h-64 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-900 p-6">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl font-bold leading-tight">
            Онлайн кинотеатр
          </h1>
          <p className="text-zinc-300">
            Фильмы, сериалы и мультфильмы в одном месте
          </p>
          <button className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:bg-zinc-200">
            Смотреть сейчас
          </button>
        </div>
      </section>
      {/* Секции */}
      <MovieSection title="Популярные сериалы" films={popularSeries.items} />
      <MovieSection title="Топ 250 фильмов" films={topFilms.items} />
    </div>
  );
}


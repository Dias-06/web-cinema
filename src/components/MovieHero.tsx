// components/MovieHero.tsx
import InfoRow from "./InfoRow";
import { MovieCardProps } from "./MovieCard";
interface MovieHeroProps extends MovieCardProps{
    ratingImdb: number,
    description: string,
    countries: Counrty[],
    year: number,
    filmLength: number //minutes,
    ratingAgeLimits: string,
    slogan: string
}
interface Movie{
    movie: MovieHeroProps
}
type Counrty = {
    country: string
}
export default function MovieHero(props : Movie) {
    const {movie} = props;

    function getAge(text:string){
      const age = text.match(/(\d+)/);
      if(age != null){
        const res = age[0] + "+";
        return res; 
      }
    }
    function getFilmLength(minutes:number){
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      const res = h + " ч." + m +" мин."
      return res; 
    }
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60">
      {/* Фон-градиент для атмосферы */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-900/30" />

      <div className="relative grid gap-6 p-5 md:grid-cols-[320px_1fr] md:p-6">
        {/* Постер */}
        <div className="mx-auto w-full max-w-[320px]">
          <div style={{backgroundImage: `url(${movie.posterUrl})`}} className="aspect-[2/3] w-full rounded-xl bg-zinc-800 bg-center bg-cover shadow-lg" />
          <div className="mt-3 flex gap-2">
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
              Full HD
            </span>
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
              {getAge(movie.ratingAgeLimits)}
            </span>
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
              { getFilmLength(movie.filmLength)}
            </span>
          </div>
        </div>

        {/* Информация */}
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold md:text-3xl">
                {movie.nameRu}
              </h1>

              <span className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-200">
                ★ <b className="font-semibold">{movie.ratingImdb}</b>
                <span className="text-zinc-400">/10</span>
              </span>
            </div>

            {/* Жанры */}
            <div className="flex flex-wrap gap-2 pt-1">
              {movie.genres && movie.genres.map((item,index) => (
                <span
                  key={index}
                  className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-200 hover:bg-zinc-800"
                >
                  {item.genre}
                </span>
              ))}
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="h-11 rounded-lg bg-white px-5 text-sm font-medium text-black hover:bg-zinc-200"
            >
              ▶ Смотреть
            </button>

            <button
              type="button"
              className="h-11 rounded-lg border border-zinc-800 bg-zinc-900 px-5 text-sm text-zinc-200 hover:bg-zinc-800"
            >
              ♡ В избранное
            </button>
          </div>

          {/* Описание */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Описание</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              {movie.description}
            </p>
          </div>

          {/* Детальная инфа */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
            <div className="mb-2 text-sm font-medium text-zinc-200">
              Подробности
            </div>

            <div className="divide-y divide-zinc-800">
              <InfoRow label="Год" value={movie.year} />
              <InfoRow label="Рейтинг" value={movie.ratingImdb} />
              <InfoRow label="Слоган" value={movie.slogan} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

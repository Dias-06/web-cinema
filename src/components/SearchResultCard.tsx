// components/SearchResultCard.tsx

import { Film } from "@/app/search/page";
interface SearchCard {
  film: Film
}
export default function SearchResultCard(props:SearchCard) {
  const {film} = props
  return (
    <div className="flex h-[200px] gap-4 rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 hover:bg-zinc-900/40">
      {/* Постер */}
      <div style={{backgroundImage: `url(${film.posterUrl})`}} className="h-full bg-center bg-cover w-[120px] flex-shrink-0 rounded-lg bg-zinc-800" />

      {/* Инфа */}
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-[20px] text-zinc-500">{film.nameRu}</h1>
              <p className="text-[14px] text-zinc-700 line-clamp-3">{film.description}</p>
              {/* <div className="h-4 w-44 rounded bg-zinc-700" />
              <div className="h-3 w-64 rounded bg-zinc-800" /> */}
            </div>

            <div className="rounded-md border flex gap-1 border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
              ★ <span>{film.rating}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
              {film.year}
            </span>
            {/*  */}
            {film.genres?.map((item,index) => (
              <span key={index} className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
                {item.genre}
              </span>
            ))}
            
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="h-9 rounded-lg bg-white px-4 text-xs font-medium text-black hover:bg-zinc-200"
          >
            Смотреть
          </button>
          <button
            type="button"
            className="h-9 rounded-lg border border-zinc-800 bg-zinc-900 px-4 text-xs text-zinc-200 hover:bg-zinc-800"
          >
            В избранное
          </button>
          <div className="flex gap-2 ml-auto">
            {film.countries.map((item,index) => (
              <span key={index} className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
                {item.country}
            </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

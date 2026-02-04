import Link from "next/link";
import MovieCard, { MovieCardProps } from "./MovieCard";
interface Props{
    title: string,
    showAllBtn?: boolean
    films: MovieCardProps[]
}
export default function MovieSection(props: Props) {
    const {films,title,showAllBtn = true} = props;
  return (
    <section className="space-y-4 p-6">
      {/* Заголовок секции */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        {showAllBtn && (
          <span className="text-sm text-zinc-400 cursor-pointer hover:text-zinc-200">
          Смотреть все →
        </span>
        )
        }
      </div>

      {/* Горизонтальный список */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {
          films.map(item => (
            <Link key={item.kinopoiskId} href={`/movies/${item.kinopoiskId}`}>
              <MovieCard nameRu={item.nameRu} genres={item.genres} posterUrl={item.posterUrl} />
            </Link>
            
          ))
        }
      </div>
    </section>
  );
}

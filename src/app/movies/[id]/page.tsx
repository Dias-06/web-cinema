// app/movies/[id]/page.tsx
import MovieHero from "@/components/MovieHero";
import MovieSection from "@/components/MovieSection";
import type { Metadata } from "next"
import { kpFetch } from "@/lib/kpFetch";

interface MoviePageProps {
  params: Promise<{id: string;}>;
}
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params
  const movie = await kpFetch(`films/${id}`)

  return {
    title: movie.nameRu,
    description: movie.description,
  }
}
export default async function MoviePage({params} : MoviePageProps) {
  const {id} = await params;
  const movieInfo = await kpFetch(`films/${id}`);
  const relatedMovies = await kpFetch(`films/${id}/relations`)
  return (
    <div className="space-y-10">
      <MovieHero movie={movieInfo} />

      {/* Похожие фильмы */}
      <MovieSection title="Похожие" showAllBtn = {false} films={relatedMovies.items}/>
    </div>
  );
}

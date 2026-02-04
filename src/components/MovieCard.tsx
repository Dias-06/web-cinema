export interface MovieCardProps{
    nameRu: string,
    posterUrl: string,
    genres?: genre[],
    kinopoiskId?: number

}
type genre ={
    genre: string
}
export default function MovieCard(props: MovieCardProps) {
    const {nameRu,posterUrl,genres} =props;
    return (
        <div className="w-40 flex-shrink-0">
            <div style={{backgroundImage: `url(${posterUrl})`,backgroundSize: 'center'}} className="h-56 w-full rounded-lg bg-zinc-800 bg-center bg-contain bg-no-repeat" />

            {/* Название */}
            <div className="mt-2 space-y-1">
                <h1 className="text-[18px] text-center">{nameRu}</h1>
                <div className="flex gap-1 flex-wrap items-center">
                    {
                    genres && 
                    genres.map((item,index) => (
                        index < 3 && <span key={index} className="text-[12px] font-normal">{item.genre}</span>
                    ))
                }
                </div>
                {/* <div className="h-4 w-3/4 rounded bg-zinc-700" />
                <div className="h-3 w-1/2 rounded bg-zinc-800" /> */}
            </div>
        </div>
    );
    }
'use client'

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface PaginationProps{
  totalPages: number
}
export default function Pagination(props: PaginationProps) {
  const sp = useSearchParams()
  const router = useRouter()
  function setPage(page : string){
    const params = new URLSearchParams(sp.toString());
    params.set("page",page)
    router.push("/search?" + params.toString())
  }

  function nextPage(page:number){
    if(page <= props.totalPages){
      const params = new URLSearchParams(sp.toString());
      params.set("page",(page+1).toString())
      router.push("/search?" + params.toString())
    }
  }

  function prevPage(page:number){
    if(page > 0){
      const params = new URLSearchParams(sp.toString());
      params.set("page",(page-1).toString())
      router.push("/search?" + params.toString())
    }
  }
  return (
    <div className="flex flex-col gap-3 sm:flex-col sm:items-center sm:justify-between">
      <div className="text-sm text-zinc-400">Показаны 20 из {props.totalPages * 20}</div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => prevPage(parseInt(sp.get('page') ?? "1"))}
          className=" cursor-pointer h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-200 hover:bg-zinc-800"
        >
          ← Назад
        </button>

        <div className="flex items-center gap-2">
          {
            Array.from({length: props.totalPages}).map((_,i) => (
              sp.get('page') == (i+1).toString() ? <PageBtn active key={i} onClick={setPage}>{(i+1).toString()}</PageBtn> : <PageBtn  key={i} onClick={setPage}>{(i+1).toString()}</PageBtn>
            ))
          }
        </div>

        <button
          type="button"
          onClick={() => nextPage(parseInt(sp.get('page') ?? "1"))}
          className="h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-200 hover:bg-zinc-800"
        >
          Вперёд →
        </button>
      </div>
    </div>
  );
}

function PageBtn({
  children,
  active,
  onClick
}: {
  children: string;
  active?: boolean;
  onClick: (e:string) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onClick(children)}
      className={[
        "h-10 w-10 rounded-lg border text-sm",
        active
          ? "border-zinc-700 bg-zinc-200 text-black"
          : "border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

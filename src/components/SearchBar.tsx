'use client'

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter()
  const sp = useSearchParams()
  const [search,setSearch] = useState(sp.get('query') ?? "");
  function find(){
    const p = new URLSearchParams(sp.toString())
    if(search.length>0){
      p.set('query',search.trim())
      p.set('page','1')
    }
    else{
      p.delete("query")
    }
    router.push(`/search?${p.toString()}`)
  }
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <div className="space-y-2">
        <div className="text-xs text-zinc-400">Поиск</div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <input
                value={search}
                onInput={(e) => setSearch(e.currentTarget.value)}
                type="text"
                placeholder="Например: Интерстеллар, Гарри Поттер, Шрек..."
                className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 pr-10 text-sm text-zinc-200 outline-none placeholder:text-zinc-500 focus:border-zinc-700"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
              ⌕
            </span>
          </div>

          <button
            type="button"
            className="h-11 rounded-lg bg-white px-5 text-sm font-medium text-black hover:bg-zinc-200"
            onClick={find}
          >
            Найти
          </button>
        </div>

      </div>
    </section>
  );
}

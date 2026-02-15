'use client'
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";

// components/SelectDropdown.tsx
type Option = { value: string; id: string };


export default function SelectDropdown({
    label,
    labelVal,
    placeholder,
    options,
}: {
    label: string;
    labelVal: string;
    placeholder: string;
    options: Option[];
}) {
    const [curValue,setCurValue] = useState<string>(placeholder)
    const [selectedId,setSelectedId] = useState("");
    const details = useRef<HTMLDetailsElement>(null)
    const sp = useSearchParams()
    const router = useRouter()
    function activateFilter(){
        const params = new URLSearchParams(sp.toString())
        params.set(`${labelVal}`,selectedId)
        params.set("page","1")
        router.push(`/search?${params.toString()}`)
    }
  return (
    <div className="space-y-2">
        <div className="text-xs text-zinc-400">{label}</div>

        <details ref={details} className="group relative">
            <summary className="flex h-10 cursor-pointer list-none items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-200 hover:bg-zinc-800">
            <span className="text-zinc-300">{curValue}</span>
            <span className="text-zinc-500 transition group-open:rotate-180">▾</span>
        </summary>

        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-xl">
            <ul className="max-h-56 overflow-auto py-1">
            {options.map((o) => (
                <li key={o.id}>
                <button
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm text-zinc-200 hover:bg-zinc-900"
                    onClick={() => {
                        setCurValue(o.value)
                        activateFilter()
                        details.current?.removeAttribute("open");
                    }}
                >
                    {o.value}
                </button>
                </li>
            ))}
            </ul>
        </div>
        </details>
    </div>
);
}

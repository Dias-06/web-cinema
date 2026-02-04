// components/SelectDropdown.tsx
type Option = { label: string; value?: string };

export default function SelectDropdown({
    label,
    placeholder,
    options,
}: {
    label: string;
    placeholder: string;
    options: Option[];
}) {
  return (
    <div className="space-y-2">
        <div className="text-xs text-zinc-400">{label}</div>

        <details className="group relative">
            <summary className="flex h-10 cursor-pointer list-none items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-200 hover:bg-zinc-800">
            <span className="text-zinc-300">{placeholder}</span>
            <span className="text-zinc-500 transition group-open:rotate-180">▾</span>
        </summary>

        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-xl">
            <ul className="max-h-56 overflow-auto py-1">
            {options.map((o, i) => (
                <li key={i}>
                <button
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm text-zinc-200 hover:bg-zinc-900"
                >
                    {o.label}
                </button>
                </li>
            ))}
            </ul>
        </div>
        </details>
    </div>
);
}

// components/Pagination.tsx
export default function Pagination() {
  return (
    <div className="flex flex-col gap-3 sm:flex-col sm:items-center sm:justify-between">
      <div className="text-sm text-zinc-400">Показаны 1–20 из 200</div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className=" cursor-pointer h-10 rounded-lg border border-zinc-800 bg-zinc-900 px-3 text-sm text-zinc-200 hover:bg-zinc-800"
        >
          ← Назад
        </button>

        <div className="flex items-center gap-2">
          <PageBtn active>1</PageBtn>
          <PageBtn>2</PageBtn>
          <PageBtn>3</PageBtn>
          <span className="px-1 text-zinc-500">…</span>
          <PageBtn>10</PageBtn>
        </div>

        <button
          type="button"
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
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
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

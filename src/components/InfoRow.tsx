// components/InfoRow.tsx
export default function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-3 py-2 text-sm">
      <div className="text-zinc-400">{label}</div>
      <div className="col-span-2 text-zinc-200">{value}</div>
    </div>
  );
}

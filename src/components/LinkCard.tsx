"use client";

type LinkCardProps = {
  id: string;
  label: string;
  url: string;
  clickCount: number;
};

export default function LinkCard({ id, label, url, clickCount }: LinkCardProps) {
  const handleClick = () => {
    fetch(`/api/links/${id}/click`, { method: "POST", keepalive: true }).catch(
      () => {},
    );
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-4 font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      <span className="mx-auto">{label}</span>
      <span className="shrink-0 text-xs font-normal text-zinc-400 dark:text-zinc-500">
        {clickCount}회
      </span>
    </a>
  );
}

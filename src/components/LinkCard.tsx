"use client";

type LinkCardProps = {
  id: string;
  label: string;
  url: string;
};

export default function LinkCard({ id, label, url }: LinkCardProps) {
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
      className="w-full rounded-xl border border-zinc-200 bg-white px-5 py-4 text-center font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {label}
    </a>
  );
}

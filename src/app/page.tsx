"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "김개발",
  bio: "풀스택 개발자 : 요즘에는 AI",
  imageUrl: "https://placehold.co/150x150/orange/white",
};

const links = [
  { id: "1", label: "Github", url: "https://github.com" },
  { id: "2", label: "LinkedIn", url: "https://linkedin.com" },
  { id: "3", label: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/links/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setClickCounts(data))
      .catch(() => {});
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              id={link.id}
              label={link.label}
              url={link.url}
              clickCount={clickCounts[link.id] ?? 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

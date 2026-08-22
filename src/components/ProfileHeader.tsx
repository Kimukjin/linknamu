import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio?: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-zinc-500 dark:text-zinc-400">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{name}</h1>
      {bio && <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>}
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="font-cn text-3xl text-gold-500">尋</p>
      <h2 className="mt-4 font-display text-2xl italic text-wine-700">
        Page Not Found
      </h2>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-gold-gradient px-6 py-2.5 text-xs uppercase tracking-widest2 text-wine-800 shadow-gold"
      >
        Back To Invitation
      </Link>
    </div>
  );
}

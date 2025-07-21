import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10 p-1">
      <h1 className="text-4xl font-bold text-center">welcome to clarecreated!</h1>
      <p className="text-lg text-center max-w-xl">
        hi, i’m clare! i share delicious recipes, cooking tips, and behind-the-scenes fun. follow me on social media for more food inspiration!
      </p>
      <div className="flex gap-22 mt-6">
        <Link
          href="https://www.instagram.com/clarecreated/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-[120px] h-[120px] flex items-center justify-center">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={120}
              height={120}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-lg font-medium">instagram</span>
        </Link>
        <Link
          href="https://www.tiktok.com/@claredodo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-[120px] h-[120px] flex items-center justify-center">
            <Image
              src="/tiktok.webp"
              alt="TikTok"
              width={80}
              height={80}
              className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
              priority
            />
          </div>
          <span className="mt-2 text-lg font-medium">tiktok</span>
        </Link>
      </div>
    </main>
  );
}

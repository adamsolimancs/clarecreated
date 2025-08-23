import Link from "next/link";
import Image from "next/image";

export default function MediaBanner() {
    return (
        <section id="socials" className="lg:py-20 py-10">
            <div className="flex flex-row sm:flex-row gap-14 sm:gap-22 w-full items-center justify-center">
                <Link
                    href="https://www.instagram.com/clarecreated/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <div className="w-16 h-16 sm:w-[120px] sm:h-[120px] flex items-center justify-center">
                        <Image
                            src="/instagram.png"
                            alt="Instagram"
                            width={94}
                            height={94}
                            className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
                            priority
                        />
                    </div>
                    <span className="mt-2 text-lg sm:text-xl font-medium">instagram</span>
                </Link>
                <Link
                    href="https://www.tiktok.com/@claredodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <div className="w-16 h-16 sm:w-[120px] sm:h-[120px] flex items-center justify-center">
                        <Image
                            src="/tiktok.webp"
                            alt="TikTok"
                            width={74}
                            height={74}
                            className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
                            priority
                        />
                    </div>
                    <span className="mt-2 text-lg sm:text-xl font-medium">tiktok</span>
                </Link>
                <Link
                    href="https://www.youtube.com/@clarecreated"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <div className="w-16 h-16 sm:w-[120px] sm:h-[120px] flex items-center justify-center">
                        <Image
                            src="/Youtube_logo.png"
                            alt="YouTube"
                            width={94}
                            height={94}
                            className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
                            priority
                        />
                    </div>
                    <span className="mt-2 text-lg sm:text-xl font-medium">youtube</span>
                </Link>
            </div>
        </section>
    );
}
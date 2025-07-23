import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen pt-6 px-4 gap-6 sm:gap-10 mt-0">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center drop-shadow-lg">about me</h1>
            <div className="flex flex-col sm:flex-row items-center bg-white/10 rounded-2xl p-6 sm:p-8 gap-8 sm:gap-20 md:gap-32 lg:gap-38 shadow-xl max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl w-full">
                <Image
                    src="/clare.jpeg"
                    alt="Clare profile picture"
                    width={220}
                    height={220}
                    className="rounded-full shadow-lg mb-4 sm:mb-0 object-cover border-4 border-white w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]" priority
                />
                <p
                    className="text-lg sm:text-xl text-center text-700 max-w-xs sm:max-w-md"
                    style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.25), 0 1px 1px rgba(0,0,0,0.15)"
                    }}
                >
                    hi! i’m clare, a passionate home cook and content creator. i love sharing fun, approachable recipes, baking and cooking hacks, and a peek into my daily foodie adventures. <br></br><br></br> whether you’re a beginner or a seasoned chef, i hope to inspire you to try something new in the kitchen and enjoy the process. thanks for being here!
                </p>
            </div>
            <div className="flex flex-row sm:flex-row gap-10 sm:gap-14 mt-4 w-full items-center justify-center">
                <Link
                    href="https://www.instagram.com/clarecreated/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group justify-center"
                >
                    <div className="w-16 h-16 flex items-center justify-center">
                        <Image
                            src="/instagram.png"
                            alt="Instagram"
                            width={84}
                            height={84}
                            className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
                            priority
                        />
                    </div>
                    <span className="mt-2 text-base sm:text-lg font-medium text-center">instagram</span>
                </Link>
                <Link
                    href="https://www.tiktok.com/@claredodo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group justify-center"
                >
                    <div className="w-16 h-16 flex items-center justify-center">
                        <Image
                            src="/tiktok.webp"
                            alt="TikTok"
                            width={64}
                            height={64}
                            className="rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200 object-contain"
                            priority
                        />
                    </div>
                    <span className="mt-2 text-base sm:text-lg font-medium text-center">tiktok</span>
                </Link>
            </div>
        </main>
    );
}
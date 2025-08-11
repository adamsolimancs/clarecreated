import Image from "next/image";
import MediaBanner from '@/app/ui/MediaBanner';

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen pt-6 px-4 gap-6 sm:gap-10 mt-0">
            <h1 className="text-4xl sm:text-4xl font-bold mb-2 text-center drop-shadow-lg">about me</h1>
            <div className="flex flex-col sm:flex-row items-center bg-white/10 rounded-2xl p-16 sm:p-8 gap-8 sm:gap-20 md:gap-32 lg:gap-38 shadow-xl max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl w-full">
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
                    hi! i&apos;m clare, a college student with a passion for making fun recipes and content. i love sharing fun, approachable recipes, baking and cooking hacks, and a peek into my daily foodie adventures. whether you&apos;re a beginner or a seasoned chef, i hope to inspire you to try something new in the kitchen and enjoy the process. thanks for being here! <br></br><br></br> when i'm not in the kitchen, you can usually find me at a cute coffee shop doing schoolwork, browsing the farmers market for inspo, or rewatching my favorite shows. i&apos;m all about making cooking feel fun, cozy, and totally doable—even on a busy schedule. i believe food should be joyful, creative, and shared, and i&apos;m so happy to have you along for the ride. ♡
                </p>
            </div>
            <div className="mb-12">
                <MediaBanner />
            </div>
        </main>
    );
}
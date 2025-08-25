import SplitText from '@/app/ui/SplitText.js';

const Hero = () => {
    const handleAnimationComplete = () => {
        console.log('Title animated!');
    };

    return (
        <section className="flex flex-col items-center justify-start gap-5 pt-14 lg:pb-12 pb-2">
            <SplitText
                text="welcome to clarecreated!"
                className="text-3xl sm:text-6xl font-bold text-center pb-8 lg:pb-20 drop-shadow-sm"
                delay={10}
                duration={2}
                ease="elastic.out(1, 0.3)"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-lg sm:text-xl text-center max-w-xs sm:max-w-xl drop-shadow-lg">
                hi, i’m clare! i share fun & yummy recipes, baking/cooking hacks, and lifestyle content. follow me on social media for more!
            </p>
        </section>
    )
}

export default Hero
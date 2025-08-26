import Link from "next/link";
import Image from "next/image";

interface MediaBannerProps extends React.ComponentProps<'div'> {}

// A banner showcasing social media links with icons
const MediaBanner: React.FC<MediaBannerProps> = ({ className, ...props }) => {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/clarecreated/?hl=en",
      img: "/instagram.png",
      size: { base: 100, sm: 90 }, // px for Image
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@claredodo",
      img: "/tiktok.webp",
      size: { base: 38, sm: 56 },
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@clarecreated",
      img: "/Youtube_logo.png",
      size: { base: 50, sm: 72 },
    },
  ];

  return (
    <section
      id="socials"
      className={`${className} py-8 sm:py-12 lg:py-16`}
      {...props}
    >
      <div className="flex flex-wrap gap-10 sm:gap-16 w-full items-center justify-center">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ease-out">
              <Image
                src={social.img}
                alt={social.name}
                width={social.size.base}
                height={social.size.base}
                className="object-contain sm:w-auto sm:h-auto sm:max-w-[95px] sm:max-h-[110px]"
                priority
              />
            </div>
            <span className="mt-3 text-base sm:text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MediaBanner;

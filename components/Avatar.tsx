import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden lg:flex lg:max-w-none pointer-events-none select-none w-full h-full items-end justify-center">
      <div
        className="relative w-full h-full max-h-full"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
        }}
      >
        <Image
          src="/avatar.png?v=5"
          alt="Alex Rivera"
          width={737}
          height={900}
          priority
          unoptimized
          className="translate-z-0 w-full h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default Avatar;

import Image from "next/image";

type AvatarProps = {
  size: number;
  src: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ size, src, className }) => {
  return (
    <div
      className={`rounded-full border-[2px] border-accent overflow-hidden hover:border-accent-400 ${className}`}
    >
      <Image src={src} alt="Avatar" width={size} height={size} />
    </div>
  );
};

export default Avatar;

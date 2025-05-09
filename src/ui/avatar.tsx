import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number; // optional prop for controlling size
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = "Avatar", size = 40 }) => {
  return (
    <div className="rounded-full overflow-hidden" style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
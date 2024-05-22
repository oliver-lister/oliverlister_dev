"use client";

import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" aria-label="Home page link" className="group">
      <div className="mx-auto md-0">
        <div className="transition-colors rounded-full border-2 border-primary dark:border-secondary overflow-hidden group-hover:bg-primary | dark:group-hover:bg-secondary">
          <Image
            src="/memoji-wave.png"
            priority
            width={50}
            height={50}
            alt="Avatar"
          />
        </div>
      </div>
    </Link>
  );
}

export default Logo;

"use client";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";

const HeaderLeft = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='header-item header-left'>
      <div
        onClick={() => {
          router.back();
        }}
      >
        {pathname !== "/" && pathname !== "/a" && <ChevronLeftIcon className='icon' />}
      </div>
    </div>
  );
};

export default HeaderLeft;

'use client'
import { useRouter } from 'next/navigation';
import {ChevronLeftIcon} from "lucide-react";
import React from 'react';

const HeaderLeft = () => {
    const router = useRouter()

    return (
      <div className='header-item header-left'>
        <div
          onClick={() => {
            router.back();
          }}
        >
          <ChevronLeftIcon className='icon' />
        </div>
      </div>
    );
}

export default HeaderLeft;

import React from "react";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({subsets: ["latin"]});

export default function TimerLayout({children} : { children: React.ReactNode }) {
    return (
        <main style={{fontFamily: dmsans.style.fontFamily}} className='text-center'>
            {children}
        </main>
      );
}
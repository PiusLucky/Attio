import { type ClassValue, clsx } from "clsx"
import localFont from "next/dist/compiled/@next/font/dist/local"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const gilroyBold = localFont({
  src: [
    {
      path: '../../public/font/gilroy_bold.ttf',
      weight: '700'
    }
  ],
})
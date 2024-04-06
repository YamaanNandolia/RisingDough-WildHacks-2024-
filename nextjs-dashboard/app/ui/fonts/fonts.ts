import { Inter, Lusitana, Roboto_Condensed, Sansita_Swashed } from 'next/font/google';
 
export const robotoCondensed = Roboto_Condensed({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const sansita = Sansita_Swashed({
    weight: ['400'],
    subsets: ['latin'],
});

export const inter = Inter({ 
    subsets: ['latin'] 
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});
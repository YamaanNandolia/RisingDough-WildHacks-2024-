import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { robotoCondensed } from '@/app/ui/fonts/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${robotoCondensed.className} flex flex-row items-center bg-iceblue-500 leading-none text-white`}
    >
      <p className="text-[44px]">Rising Dough</p>
    </div>
  );
}

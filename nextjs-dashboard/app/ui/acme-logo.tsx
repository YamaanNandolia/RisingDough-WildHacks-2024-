import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter, robotoCondensed } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${robotoCondensed.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Rising Dough</p>
    </div>
  );
}

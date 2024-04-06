import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { sansita } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${sansita.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Rising Dough</p>
    </div>
  );
}

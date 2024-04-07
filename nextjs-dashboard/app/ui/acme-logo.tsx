import { passionOne } from '@/app/ui/fonts/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${passionOne.className} flex flex-row items-center bg-iceblue-500 leading-none text-white`}
    >
      <p className="text-[44px]">Rising&nbsp;</p>
      <p className="text-[44px]">Dough&nbsp;</p>
      <p className="text-[44px]">🍞</p>
    </div>
  );
}

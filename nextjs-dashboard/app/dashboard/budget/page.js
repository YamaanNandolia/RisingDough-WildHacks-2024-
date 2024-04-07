import PolarArea from './polarchart';
import Multiple from './crapform';
import { inter } from '@/app/ui/fonts/fonts';

export default function Page() {
    return(
        <main className='grid grid-cols-1 md:grid-cols-2 gap-6' style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="md:col-span-1 gap-6 flex flex-col">
                <div className="flex flex-col gap-6 rounded-lg bg-gray-100 py-10  justify-center items-center" style={{height: '600px'}}>
                    <div style={{height: '400px', width: '400px'}}>
                        <PolarArea />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 px-10 py-10 md:w-5/5 md:px-20">
                <h1 className="text-2xl text-black-800 md:text-3xl text-bold text-center">Enter Budget:</h1>
                <Multiple />
            </div>
        </main>
    );
}
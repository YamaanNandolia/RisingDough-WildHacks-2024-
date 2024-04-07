import Doughnut from './Donut';

export default function Page() {
    return (
    <main className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-10 py-5 md:w-2/5 md:px-20">
        <div>
            <Doughnut />
        </div>
    </main>
    );
}
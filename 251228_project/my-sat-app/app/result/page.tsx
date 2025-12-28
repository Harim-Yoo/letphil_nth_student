"use client";

import { useSearchParams } from 'next/navigation';
import Link from "next/link";


export default function ResultPage() {

    const searchParams = useSearchParams();
    const score = searchParams.get('score');

    return (
        <div className = "min-h-screen bg-gray-50 flex flex-col justify-center items-center px-8 py-10">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

                <div className="bg-slate-800 p-8 text-center text-white">
                    <p className="text-slate-200 text-sm font-bold tracking-widest uppercase mb-4">
                        Your Total Score
                    </p>
                    <h1 className="text-6xl font-extrabold tracking-tight">
                        { score }
                    </h1>
                    <p className="mt-4 uppercase text-slate-300">
                        Section 1: Math Practice
                    </p>
                </div>

                <div className="p-8">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
                        <div className="flex flex-row items-start justify-center gap-3">
                            <span className="text-3xl">🎉</span>
                            <div>
                                <h3 className="font-bold text-blue-900">Great Job!</h3>
                                <p className="text-sm text-blue-700 mt-1">
                                    You have completed the practice test. Review your answers and try again to improve your score.
                                </p>
                            </div>
                        </div>
                    </div>

                
                    <Link
                        href="/exam"
                        className="block w-full text-center text-white font-bold bg-slate-600 rounded-xl p-2 mt-1 hover:text-green-200 transition-transform transform hover:-translate-y-0.5"
                    >
                    Try Again
                    </Link>
                </div>
            </div>
        </div>
    )
}
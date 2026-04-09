"use client";

import { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyApp() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="w-full min-h-screen  p-4 flex justify-center">

            <div className="w-full max-w-3xl   rounded-4xl shadow-3xl overflow-hidden">

                <div className="relative w-full h-[250px] md:h-[320px]">
                    <Image
                        src="/image.jpg"
                        alt="Calendar artwork"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* 🔥 Polygon Shape */}
                    <div
                        className="absolute bottom-0 right-[250px] w-full h-[100px] bg-white flex items-center justify-center"
                    >
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            {value.toLocaleString("default", { month: "long" })}{" "}
                            {value.getFullYear()}
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* 📅 LEFT - CALENDAR */}
                    <div className="p-6  flex justify-center items-center">
                        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
                            <Calendar onChange={onChange} value={value} locale="en-us" />
                        </div>
                    </div>

                    <div className="p-6   bg-gray-100 flex flex-col justify-center gap-4">

                        <h2 className="text-xl  font-semibold text-gray-800">
                            Notes / Events
                        </h2>

                        <div className="bg-olive-600 p-4   rounded-xl shadow-sm">
                            <p className="text-white">
                                • Meeting at 3 PM
                                <br />
                                • Gym session
                                <br />
                                • Project deadline
                            </p>
                        </div>

                        <div className="bg-olive-600 p-4 rounded-xl shadow-sm">
                            <p className="text-white">
                                You can replace this with:
                                <br />- Tasks
                                <br />- Reminders
                                <br />- Events API
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyApp() {
    const [value, onChange] = useState(new Date());
    const [tasks, setTasks] = useState({});
    const [input, setInput] = useState("");

    const dateKey = value.toDateString();
    const isToday = dateKey === new Date().toDateString();


    useEffect(() => {
        const stored = localStorage.getItem("tasks");
        if (stored) setTasks(JSON.parse(stored));
    }, []);


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!input.trim()) return;

        const current = tasks[dateKey] || [];
        if (current.length >= 2) {
            alert("Only 2 tasks allowed");
            return;
        }

        setTasks({
            ...tasks,
            [dateKey]: [...current, { text: input, done: false }],
        });

        setInput("");
    };

    const toggleTask = (i) => {
        const updated = [...(tasks[dateKey] || [])];
        updated[i].done = !updated[i].done;
        setTasks({ ...tasks, [dateKey]: updated });
    };

    const deleteTask = (i) => {
        const updated = [...(tasks[dateKey] || [])];
        updated.splice(i, 1);
        setTasks({ ...tasks, [dateKey]: updated });
    };

    const editTask = (i) => {
        const newText = prompt("Edit task:");
        if (!newText) return;

        const updated = [...(tasks[dateKey] || [])];
        updated[i].text = newText;
        setTasks({ ...tasks, [dateKey]: updated });
    };

    return (
        <div className="w-full min-h-screen p-4 flex justify-center">

            <div className="w-full max-w-3xl bg-white rounded-4xl shadow-2xl overflow-hidden">

                <div className="relative w-full h-[400px]">
                    <Image
                        src="/trek.jpg"
                        alt="Calendar artwork"
                        fill
                        className="object-contain"
                        style={{ objectPosition: "50% 20%" }}
                        priority
                    />

                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="absolute bottom-0 right-0">
                        <div
                            className="px-6 py-3 text-white shadow-xl bg-olive-600"
                            style={{
                                clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 85% 100%, 0% 100%, 10% 45%)",
                            }}
                        >
                            <h1 className="text-lg md:text-xl font-semibold text-right">
                                {value.toLocaleString("default", { month: "long" })}{" "}
                                {value.getFullYear()}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="p-6 flex justify-center items-center">
                        <div className="p-4 rounded-xl shadow-md bg-white">
                            <Calendar
                                onChange={onChange}
                                value={value}
                                locale="en-us"
                            />
                        </div>
                    </div>


                    <div className="p-6 bg-white flex flex-col justify-center gap-4 " >

                        <h2 className="text-xl font-semibold text-gray-800">
                            Notes / Events
                        </h2>

                        {isToday && (
                            <div className="flex gap-2">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Add today's task..."
                                    className="flex-1 px-3 py-2 rounded-lg border text-black"
                                />
                                <button
                                    onClick={addTask}
                                    className="px-3 py-2 bg-olive-600 text-white rounded-lg"
                                >
                                    Add
                                </button>
                            </div>
                        )}

                        {!isToday && (
                            <p className="text-sm text-gray-500">
                                You can only add tasks for current day.
                            </p>
                        )}

                        <div className="bg-olive-600 p-4 rounded-xl shadow-sm">
                            <p className="text-white">
                                {(tasks[dateKey] && tasks[dateKey][0]) ? (
                                    <>
                                        • {tasks[dateKey][0].text}
                                        <span className="ml-3">
                                            <button onClick={() => toggleTask(0)}>✔</button>{" "}
                                            <button onClick={() => editTask(0)}>✏️</button>{" "}
                                            <button onClick={() => deleteTask(0)}>🗑</button>
                                        </span>
                                    </>
                                ) : "No task added"}
                            </p>
                        </div>

                        <div className="bg-olive-600 p-4 rounded-xl shadow-sm">
                            <p className="text-white">
                                {(tasks[dateKey] && tasks[dateKey][1]) ? (
                                    <>
                                        • {tasks[dateKey][1].text}
                                        <span className="ml-3">
                                            <button onClick={() => toggleTask(1)}>✔</button>{" "}
                                            <button onClick={() => editTask(1)}>✏️</button>{" "}
                                            <button onClick={() => deleteTask(1)}>🗑</button>
                                        </span>
                                    </>
                                ) : "No task added"}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
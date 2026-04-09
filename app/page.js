 import Image from "next/image";
 import Navbar from "../Components/Navbar"
 import MyCalendar from "@/Components/Calender";


export default function Home() {
  return (
    <div className="pt-20 min-h-screen bg-neutral-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-neutral-100">
      <MyCalendar/>
    </div>
  );
}

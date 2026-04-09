 import Image from "next/image";
 import Navbar from "../Components/Navbar"
 import MyCalendar from "@/Components/Calender";


export default function Home() {
  return (
    <div className="pt-20 min-h-screen bg-neutral-100 ">
      <MyCalendar/>
    </div>
  );
}

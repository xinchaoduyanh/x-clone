import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { FaMagnifyingGlass, FaXTwitter } from "react-icons/fa6";

import NAVIGATION_ITEMS from "./navigationItems";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* -------------------------Tạo side bar bên trái  ----------------------------------------------------------------*/}
        <section className="fixed w-[275px] items-stretch flex flex-col h-screen">
          <Link className="my-4" href={"/"}>
            <FaXTwitter />
          </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              href={`/${item.title.toLowerCase()}`}
              className="bg-white/50 text-2xl font-light  p-2 rounded-3xl flex  justify-center items-center gap-4 hover:bg-gray-200 transition-all duration-200 ease-in-out cursor-pointer"
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              <span>{item.title}</span>
            </Link>
          ))}
          <Button className="rounded-full ">Post</Button>
        </section>
        {/* -------------------------Tạo main content  --------------------------------------------------------------------*/}
        <main>Home timeline</main>
        {/* -------------------------Tạo right section  -----------------------------------------------------------------*/}
        <section className="">right section</section>
      </div>
    </div>
  );
}

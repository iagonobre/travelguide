import Image from "next/image";
import Link from "next/link";
import { FiMap } from "react-icons/fi";
import { IoFootstepsOutline, IoPizzaOutline } from "react-icons/io5";

export function Header() {
    return (
        <header className="mt-8 mb-8 ml-16 mr-16 flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.svg" alt="Travel Guide" width={180} height={180} />
            </Link>

            <nav className="flex">
                <Link href="/" className="flex rounded-full border-[1px] pt-1 pb-1 pr-4 pl-4 items-center hover:opacity-85 hover:-translate-y-1 hover:scale-[101%] duration-300 cursor-pointer">
                    <FiMap size={18} />
                    <p className="ml-4">Lugares</p>
                </Link>
                <Link href="/" className="flex ml-4 rounded-full border-[1px] pt-1 pb-1 pr-4 pl-4 items-center hover:opacity-85 hover:-translate-y-1 hover:scale-[101%] duration-300 cursor-pointer">
                    <IoPizzaOutline size={18} />
                    <p className="ml-4">Onde comer?</p>
                </Link>
                <Link href="/" className="flex ml-4 rounded-full border-[1px] pt-1 pb-1 pr-4 pl-4 items-center hover:opacity-85 hover:-translate-y-1 hover:scale-[101%] duration-300 cursor-pointer">
                    <IoFootstepsOutline size={18} />
                    <p className="ml-4">O que fazer?</p>
                </Link>
            </nav>

            <div className="w-[180px] flex justify-end">
                <Link href="/contact">Contato</Link>
            </div>
        </header >
    )
}
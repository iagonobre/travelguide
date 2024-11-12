import Image from "next/image";
import { Header } from "../components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section className="m-16">
        <h1 className="text-6xl font-normal">Explore o mundo</h1>

        <div className=" flex gap-4 w-full h-[34rem] mt-6">
          <Link href="/snow" className="w-[70%] h-full relative transition ease-in-out hover:-translate-y-1 hover:scale-[101%] duration-300 cursor-pointer" >
            <Image className="z-0 rounded-lg w-full h-full object-cover" src="/post2.png" alt="Imagem de vale com rochas avermelhadas" width={500} height={500} />

            <div className="w-[54%] p-2 absolute bottom-4 left-4 shadow-xl bg-white bg-opacity-80 z-50 rounded-lg backdrop-blur-xl">
              <h3 className="text-black text-2xl font-semibold leading-snug">Tranquilidade em Snowmass Mountain: Dicas Imperdíveis para Sua Viagem</h3>
            </div>

            <div className="pr-2 pl-2 absolute top-4 left-4 shadow-xl bg-slate-50 z-50 rounded-full"><p className="text-black font-semibold">11 de nov. de 2024</p></div>
          </Link>
          <div className=" w-[30%] h-full gap-4 flex flex-col">
            <Link href="/jordania" className="relative h-full transition ease-in-out hover:-translate-y-1 hover:scale-[101%] duration-300 cursor-pointer" >
              <Image className="z-0 rounded-lg h-full object-cover" src="/post1.jpg" alt="Imagem de vale com rochas avermelhadas" width={500} height={500} />
              <div className="w-[54%] p-2 absolute bottom-4 left-4 shadow-xl bg-white bg-opacity-80 z-50 rounded-lg backdrop-blur-xl">
                <h3 className="text-black text-xl font-semibold leading-snug">Desbravando os Cânions da Jordânia</h3>
              </div>
              <div className="pr-2 pl-2 absolute top-4 left-4 shadow-xl bg-slate-50 z-50 rounded-full"><p className="text-black font-semibold">01 de jun. de 2024</p></div>
            </Link>

            <Link href="/corais" className="relative h-full transition ease-in-out hover:-translate-y-1 hover:scale-[101%] duration-300 cursor-pointer" >
              <Image className="z-0 rounded-lg h-full w-full object-fill" src="/post3.jpg" alt="Imagem de vale com rochas avermelhadas" width={500} height={500} />
              <div className="w-[54%] p-2 absolute bottom-4 left-4 shadow-xl bg-white bg-opacity-80 z-50 rounded-lg backdrop-blur-xl">
                <h3 className="text-black text-xl font-semibold leading-snug">Descubra a Beleza dos Recifes de Corais</h3>
              </div>
              <div className="pr-2 pl-2 absolute top-4 left-4 shadow-xl bg-slate-50 z-50 rounded-full"><p className="text-black font-semibold">06 de set. de 2023</p></div>
            </Link>
          </div>
        </div>


      </section>
    </>
  );
}

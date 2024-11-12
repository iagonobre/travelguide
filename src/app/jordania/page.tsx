import Image from "next/image";
import { Header } from "../../components/header";

export default function Jordania() {
  return (
    <>
      <Header />
      <section className="m-16">
        <h1 className="text-6xl font-normal mb-6 text-white">
          Desbravando os Cânions da Jordânia
        </h1>
        <Image className="mt-8 rounded-lg w-full h-80 object-cover" src="/post1.jpg" alt="Imagem de cânion na Jordânia" width={500} height={500} />

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-white">
          <p>
            A Jordânia é um país repleto de paisagens deslumbrantes e rica história, mas poucos sabem que seus cânions são verdadeiras maravilhas naturais que merecem ser exploradas. Do famoso desfiladeiro de Petra aos impressionantes vales do Wadi Mujib e do Wadi Rum, os cânions jordanianos oferecem uma experiência única para quem busca aventura, natureza e cultura.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Wadi Mujib: O Grand Canyon da Jordânia</h2>
          <p>
            Localizado às margens do Mar Morto, o Wadi Mujib é conhecido como o Grand Canyon da Jordânia. Com paredes íngremes e trilhas aquáticas que passam por cachoeiras e piscinas naturais, o local é perfeito para quem gosta de caminhadas, escaladas e aventuras aquáticas. Durante a primavera, o Wadi Mujib ganha ainda mais vida, com águas mais abundantes e uma vegetação surpreendente em meio ao deserto.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Petra: O Tesouro da Antiguidade</h2>
          <p>
            O desfiladeiro estreito de Siq leva diretamente ao coração de Petra, uma das novas sete maravilhas do mundo. As formações rochosas e o caminho sinuoso do Siq criam uma atmosfera mágica, e ao final do desfiladeiro, o visitante é recompensado com a vista do Tesouro de Petra, esculpido diretamente na rocha. Caminhar por esses cânions é como viajar no tempo e reviver a grandeza do Império Nabateu.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Wadi Rum: O Vale da Lua</h2>
          <p>
            Conhecido como o Vale da Lua, o Wadi Rum é um vasto deserto de rochas vermelhas e arenosas que formam cânions e arcos naturais impressionantes. É um lugar popular para passeios de jipe, escaladas e até mesmo para acampar sob o céu estrelado. O cenário exótico do Wadi Rum já foi pano de fundo para vários filmes, incluindo *Lawrence da Arábia* e *Perdido em Marte*. A imensidão do Wadi Rum e suas formações rochosas únicas fazem deste cânion um dos locais mais surreais e fotogênicos do mundo.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Dicas para Explorar os Cânions da Jordânia</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Leve roupas e calçados adequados</strong> para caminhadas e atividades aquáticas, especialmente no Wadi Mujib.
            </li>
            <li>
              <strong>Reserve passeios guiados</strong> para aproveitar ao máximo a experiência e entender a história local.
            </li>
            <li>
              <strong>Vá preparado para o clima do deserto</strong>, com água, protetor solar e chapéu.
            </li>
            <li>
              <strong>Experimente acampar</strong> no Wadi Rum para uma noite inesquecível sob as estrelas.
            </li>
          </ul>

          <p className="mt-6">
            Explorar os cânions da Jordânia é mergulhar em um cenário épico de aventura e cultura. Cada desfiladeiro guarda histórias milenares e paisagens que parecem de outro planeta, criando memórias que você levará para a vida inteira.
          </p>
        </div>
      </section>
    </>
  );
}

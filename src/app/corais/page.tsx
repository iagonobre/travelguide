import Image from "next/image";
import { Header } from "../../components/header";

export default function Corais() {
  return (
    <>
      <Header />
      <section className="m-16">
        <h1 className="text-6xl font-normal mb-6 text-white">
          Descubra a Beleza dos Recifes de Corais
        </h1>
        <Image className="mt-8 rounded-lg w-full h-80 object-cover" src="/post3.jpg" alt="Imagem de recife de corais" width={500} height={500} />

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-white">
          <p>
            Os recifes de corais estão entre as formações mais deslumbrantes e vitais do ecossistema marinho. Conhecidos como as florestas tropicais do mar, esses habitats coloridos abrigam uma impressionante biodiversidade, fornecendo abrigo e alimento para inúmeras espécies. Explorar os recifes de corais é como mergulhar em um mundo de cores, formas e vida vibrante, onde cada canto revela uma nova surpresa.
          </p>

          <h2 className="text-2xl font-semibold mt-6">O Que São Recifes de Corais?</h2>
          <p>
            Recifes de corais são estruturas formadas ao longo de milhares de anos pelos corais, organismos marinhos que criam uma base sólida de calcário. Essa base serve de lar para diversas espécies marinhas, incluindo peixes, crustáceos, moluscos e outras formas de vida marinha. Eles são fundamentais para o equilíbrio ecológico, pois fornecem abrigo e contribuem para a manutenção das cadeias alimentares do oceano.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Onde Encontrar os Mais Belos Recifes de Corais?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Grande Barreira de Corais, Austrália:</strong> O maior sistema de recifes do mundo é visível até do espaço. Com mais de 2.300 km de extensão, abriga uma variedade incrível de espécies e é um dos melhores destinos de mergulho do mundo.
            </li>
            <li>
              <strong>Recife de Belize, América Central:</strong> Este recife é o segundo maior do mundo e é conhecido por suas águas cristalinas e abundante vida marinha. O Blue Hole, uma caverna submersa circular, é um ponto turístico icônico para mergulhadores.
            </li>
            <li>
              <strong>Ilhas Maldivas:</strong> As Maldivas oferecem recifes de corais em águas rasas e cristalinas, ideais para snorkeling. Com peixes coloridos, tubarões de recife e corais exuberantes, é um paraíso submerso.
            </li>
            <li>
              <strong>Mar Vermelho, Egito:</strong> Os recifes de corais do Mar Vermelho são famosos por suas águas claras e pelas formações espetaculares que abrigam uma enorme diversidade de vida marinha.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Por Que os Recifes de Corais São Importantes?</h2>
          <p>
            Além de sua beleza natural, os recifes de corais desempenham um papel crucial no ecossistema marinho e na proteção costeira. Eles atuam como barreiras naturais, protegendo as costas contra a erosão causada pelas ondas e tempestades. Também são fonte de alimento e renda para milhões de pessoas, principalmente em comunidades que dependem da pesca e do turismo.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Como Proteger os Recifes de Corais?</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Evite o uso de protetor solar com substâncias químicas prejudiciais.</strong> Opte por protetores solares ecológicos quando mergulhar em áreas de recifes.
            </li>
            <li>
              <strong>Pratique o turismo consciente.</strong> Não toque nos corais, pois são extremamente sensíveis e podem ser danificados facilmente.
            </li>
            <li>
              <strong>Apoie iniciativas de conservação</strong> e projetos que buscam preservar os recifes de corais.
            </li>
          </ul>

          <p className="mt-6">
            Explorar os recifes de corais é uma experiência inesquecível que nos conecta com a beleza e a fragilidade do mundo subaquático. Cuidar desses ecossistemas é essencial para garantir que gerações futuras possam testemunhar a grandiosidade e o encanto dos recifes de corais.
          </p>
        </div>
      </section>
    </>
  );
}

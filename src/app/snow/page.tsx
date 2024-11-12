import Image from "next/image";
import { Header } from "../../components/header";

export default function Snow() {
  return (
    <>
      <Header />
      <section className="m-16">
        <h1 className="text-6xl font-normal mb-6">
          Tranquilidade em Snowmass Mountain: Dicas Imperdíveis para Sua Viagem
        </h1>
        <Image className="mt-8 rounded-lg w-full h-80 object-cover" src="/post2.png" alt="Imagem de vale com rochas avermelhadas" width={500} height={500} />

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-white">
          <p>
            Snowmass Mountain é um destino que combina aventura e paz em meio às paisagens arrebatadoras do Colorado. Conhecida por suas excelentes pistas de esqui, Snowmass também surpreende no verão, com trilhas para todos os níveis de habilidade e atividades ao ar livre para toda a família.
          </p>

          <p>
            Para os amantes de esportes de inverno, a temporada de neve traz opções de esqui e snowboard em encostas variadas e com belas vistas das Montanhas Rochosas. Não se esqueça de reservar com antecedência – o lugar é popular entre turistas e locais! Já para quem visita na primavera ou verão, o cenário muda: as trilhas de hiking, o mountain biking e os passeios de gôndola são as melhores maneiras de explorar a região.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Dicas Úteis</h2>

          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Hospedagem:</strong> Fique próximo à montanha para aproveitar ao máximo o clima e a praticidade, mas se quiser economizar, considere hotéis ou Airbnb em Aspen, a poucos minutos de distância.
            </li>
            <li>
              <strong>Gastronomia:</strong> Snowmass Village oferece uma ótima variedade de opções, mas os favoritos locais incluem refeições com ingredientes frescos e pratos típicos do Colorado.
            </li>
            <li>
              <strong>Passeios extras:</strong> Faça uma parada nas galerias de arte em Aspen e explore as lojas e cafés charmosos para mergulhar no estilo de vida local.
            </li>
          </ul>

          <p className="mt-6">
            Independentemente da estação, Snowmass Mountain oferece uma viagem inesquecível para todos os tipos de aventureiros!
          </p>
        </div>
      </section>
    </>
  );
}

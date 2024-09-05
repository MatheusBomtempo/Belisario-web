export default function Main() {
  return (
    <section className="text-gray-600 body-font font-sans">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center xl:w-2/2 text-gray-900 font-bold">
            Conheça o belisário
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg font-semibold">
            Somos uma aplicação dedicada a fornecer rotas otimizadas para o
            atendimento em serviços públicos de saúde, com base nos sintomas
            descritos pelo usuário.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform border rounded-lg bg-cyan-500"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Saiba Mais</span>
            </a>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/iPhone-12-MockupReal.png"
          ></img>
        </div>
      </div>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl font-sans font-semibold text-gray-900">
          Lançamento em breve
        </h1>
        <h1 className="mb-8 text-2xl font-sans font-semibold text-gray-600 text-center">
          Devido a questões relacionadas à patente, o lançamento foi adiado até
          novo aviso.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="./images/placeholder.png"
          ></img>
        </div>
      </div>

      <section className="max-w-7xl mx-auto py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Pessoas envolvidas no projeto
        </h2>
        <div className="mx-auto max-w-4xl text-left">
          <ul className="list-none text-lg text-gray-700">
            <li className="mb-4">
              <span className="font-semibold">Pesquisadores bolsistsas:</span>{" "}
              Erton Rocha Gomes Pereira, Lara Wiermann Chaves de Oliveira,
              Isabella Cristina Campos Ferreira.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Desenvolvedores bolsistas:</span>{" "}
              Matheus Felipe Bomtempo de Albuquerque e Thaian Gabriel Antonio
              Ramalho.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Pesquisadoras voluntárias:</span>{" "}
              Dyrlenne Maria Araújo Dias, Giuliana Facco Machado.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Orientador:</span> Prof. Dr.
              Ricardo Matos de Araújo Rios.
            </li>
          </ul>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl font-sans font-semibold text-gray-900">
              Alguma dúvida?
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Insira seu email para que possamos conversar sobre esta ideia!
            </h1>
            <input
              placeholder="belisario@ex.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Enviar</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

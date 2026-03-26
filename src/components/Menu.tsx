"use client"; // necessário para usar hooks como useRouter
import { Bakbak_One, Be_Vietnam_Pro } from "next/font/google";
import { useRouter } from "next/navigation";

const bakbak = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

function Menu() {
  
  const router = useRouter();

  return ( 
    <>
      <div

      //meu contaiener, onde vou colocar a imagem de fundo e organizar o layout
  className="h-screen flex flex-col justify-between"
  // h-screen - faz a div ocupar 100% da altura da tela
  // flex - ativa o flexbox (organização de layout)
  // flex-col - organiza os elementos em coluna (de cima pra baixo)
  // justify-between - empurra o conteúdo: topo, meio e fundo bem distribuídos

  style={{
    backgroundImage: "url('/Background.png')",
    // define a imagem de fundo
    backgroundSize: "cover",
    //faz imagem cobrir toda a tela, sem distorcer
    backgroundPosition: "center",
    // centraliza a imagem (importante para telas de tamanhos variados)
    backgroundRepeat: "no-repeat",
    //impede a imagem de se repetir caso a tela seja maior que a imagem
  }}>

     {/*meu header*/}
    <div className="px-6 pt-30 md:pt-32 md:max-w-3xl md:mx-auto"> 
          {/* px-6 → padding lateral */}
          {/* pt-30 → padding topo grande */}
          {/* md:pt-32 → padding topo maior em telas médias */}
          {/* md:max-w-3xl → largura máxima do container em telas médias */}
          {/* md:mx-auto → centraliza horizontalmente em telas médias */}
          {/* Prefixo	Largura mínima da tela sm:	640px md:	768px */}

      <h1 className={`${bakbak.className} text-white text-2xl`}> {/*Text-white - texto branco, text-2xl - tamanho do texto, font-bold - negrito*/}
        Bem Vindo (A)!
      </h1>
      <h2 className={`${beVietnam.className}text-white mt-2 bold `}>
        {/* mt -2 -> margem no topo (espaço entre h1 e h2)*/}
        Selecione um modulo
      </h2>

    </div>

    {/*Area de ações*/}

    <div className="px-6 space-y-4 flex-grow flex flex-col justify-center mt-6 md:mt-10 mb-10 md:max-w-3xl md:mx-auto" >
        {/* px-6 → espaçamento lateral */}
        {/* space-y-4 → espaço entre os botões */}
        {/* flex-grow → faz a div crescer para ocupar o espaço disponível */}
        {/* flex flex-col justify-center → organiza os botões em coluna e centraliza verticalmente */}
        {/* mb-50 → margem inferior para dar espaço do rodapé */}
        {/* 2xl:mx-auto → centraliza horizontalmente em telas 2xl */}

       {/*Botão de venda*/}

       <div className="bg-[#2d4c56]/81 border border-white/5 backdrop-blur-sm rounded-full p-8 flex justify-start items-center  cursor-pointer hover:bg-slate-700/80 transition-all shadow-xl hover:scale-[1.02]">
          {/* bg-slate-800/60 → fundo cinza escuro com 60% de opacidade */}
          {/* border border-white/5 → borda branca com 5% de opacidade */}
          {/* backdrop-blur-sm → efeito de desfoque no fundo */}
          {/* rounded-3xl → bordas arredondadas */}
          {/*flex justify-start : organiza o conteúdo em linha e alinha à esquerda */}
          {/* items-center : alinha o conteúdo verticalmente ao centro */}
          {/* cursor-pointer : muda o cursor para indicar que é clicável */}
          {/* hover:bg-slate-700/80 : muda a cor de fundo ao passar o mouse */}
          {/* transition-all : suaviza a transição de estilos */}
          {/* shadow-xl : adiciona uma sombra ao botão */}
        
        <span className={`${beVietnam.className} text-white text-3xl font-bold uppercase tracking-wider leading-tight w-2/3`}>
        {/* tracking-wider → aumenta o espaçamento entre as letras */}
        {/* leading-tight → reduz o espaçamento entre as linhas */}
        {/* w-2/3 → largura do texto ocupando 2/3 do botão */}

          Realizar Venda
        </span>

          <img src="/dinheiro-icon.png" alt= "vender" className="w-20 h-auto object-contain" />
          {/* w-20 → largura da imagem */}
          {/* h-auto → altura automática para manter a proporção */}
          {/* object-contain → garante que a imagem seja totalmente visível dentro do espaço */}
       </div>

        {/*botao cadastrar produtos*/}

      <div className="bg-[#2d4c56]/81 border border-white/5 backdrop-blur-sm rounded-full p-8 flex justify-start items-center cursor-pointer hover:bg-slate-700/80 transition-all shadow-xl hover:scale-[1.02]"
      onClick={() => router.push("/cadastroproduto")}
      >
        {/** justify-start : organiza o conteúdo em linha e alinha à esquerda */}
        {/** items-center : alinha o conteúdo verticalmente ao centro */}


        <span className={`${beVietnam.className} text-white text-3xl font-bold uppercase tracking-wider leading-tight w-2/3`}>
          Cadastrar Produtos
        </span>
        <img src="/itens-icon.png" alt="cadastrar- itens" className="w-20 h-auto object-contain"/>
      </div>

      </div>

        {/* --- aera do meu container de nav --- */}
        <div className="pb-10 px-6 md:max-w-md md:mx-auto md:w-full">

            {/** personalizando a barrinha */}
            <nav className="bg-[#2d4c56]/81 backdrop-blur-lg rounded-full px-8 py-4 flex justify-between items-center shadow-2xl border border-white/10">
            {/* bg-slate-900/80 → fundo escuro com transparência */}
            {/* flex justify-between → distribui itens igualmente */}
            {/* flex justify-between → distribui itens igualmente */}

            {/** Constuindo item 1 */}

            <div className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transicion-opacity">
              <img src="/modulos-icon.png" alt="home" className="w-6 h-6 mb-1"/>
              {/* mb-1 → espaçamento do texto */}
              {/* sem o hover o efeito de opacidade ficaria fixo, com o hover ele só aparece quando o mouse passa por cima */}

              <span className="text-white text-[10px] font bold tracking-tighter">
                Módulos
              </span>
            </div>

            {/** Constuindo item 2 */}
            <div className="flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transicion-opacity">
              <img src="/metricas-icon.png" alt="metricas" className="w-6 h-6 mb-1"/>

              <span className="text-white text-[10px] font bold tracking-tighter">
                Métricas
              </span>

            </div>

            {/**Construindo item 3 */}

            <div className=" flex flex-col items-center cursor-pointer opacity-60 hover:opacity-100 transicion-opacity">
              <img src="/perfil-icon.png" alt="perfil" className="w-6 h-6 mb-1" />

              <span className="text-white text-[10px] font bold traking-tighter">
                Perfil
              </span>

            </div>

            

            </nav>
        </div>
    </div>

      
</>

  )}

export default Menu;
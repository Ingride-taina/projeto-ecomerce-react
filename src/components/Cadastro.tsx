import { Bakbak_One, Be_Vietnam_Pro } from "next/font/google";

const bakbak = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

function TelaCadastro() {
    return(
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
             <div className="px-12 pt-25 md:pt-32 md:max-w-3xl md:mx-auto">

                  <div className="bg-[#2d4c56]/81 backdrop-blur-[5.8px]  rounded-[210px] w-80 h-20  flex items-center justify-between px-10">
                            <span className="text-sm md:text-xl font-bold uppercase text-white">
                                Nova Categoria
                            </span>
                            <span className="text-2xl">+</span>
                  </div>
       
             </div>

                 {/*Area de ações(corpinho)*/}
                 <div className="flex-grow flex flex-col items-start px-12 mt-10 w-full md:max-w-md md:mx-auto">
                        {/* 1. O LABEL */}
                        <label className={`${beVietnam} text-white text-[12px]  opacity-80 mb-3`}>
                        Nome do produto
                        </label>

                        {/* 2. A CAIXA DE TEXTO (INPUT) */}
                            <input 
                                
                                type="text" 
                                className=" w-full h-[54px] bg-transparent border border-[#2d4c56]/81 backdrop-blur-sm rounded-lg px-4 text-white outline-none" 
                            />

                              {/* Campo de Categoria */}
                                <div className="flex flex-col items-start gap-2 w-full mt-6">
                                
                                <label className="text-white text-[12px]  opacity-80">
                                    Categoria
                                </label>

                                {/* A CAIXA (DIV) com a setinha */}

                                <div className="w-full h-[54px] bg-transparent border border-[#2d4c56]/81 backdrop-blur-sm rounded-lg px-4 flex justify-between items-center cursor-pointer">
                                    
                                    <span className="text-white/40 text-sm">Selecione...</span>
                                    
                                    {/* Ícone da Seta (pode usar um caractere ou ícone) */}
                                    <span className="text-white text-xs">▼</span>

                                </div>
                                </div>

                                {/* Campo de Preço */}
                                        <div className="flex flex-col items-start gap-2 w-full mt-6">
                                        
                                        <label className="text-white text-[12px] opacity-80">
                                            Preço
                                        </label>

                                        {/* A CAIXA CURTA (Usamos max-w-[150px] para limitar) */}
                                        <input 
                                            type="text" 
                                            placeholder="R$ 0,00"
                                            className= "w-full max-w-[150px] h-[54px] bg-transparent border border-[#2d4c56]/81 backdrop-blur-sm rounded-lg px-4 text-white outline-none placeholder:text-white/20" 
                                        />

                                        </div>

                                        {/* --- DIV FINAL (RODAPÉ) --- */}
                                            <div className="w-full pb-1 flex justify-center items-center mt-auto">

                                        {/* BOTÃO FINAL DE CADASTRO */}
                                            <button className=" w-[302px] h-[88px] bg-[#2d4c56]/81 backdrop-blur-sm rounded-[210px] mt-auto mb-10 mx-autoflex items-center justify-center transition-all hover:bg-[#2d4c56]/100
                                            ">
                                            <span className="text-white font-bold uppercase tracking-wider text-sm">
                                                Cadastrar Produto
                                            </span>
                                            </button>
                                            </div>

                 </div>

            </div>     
        </>
    )}
export default TelaCadastro
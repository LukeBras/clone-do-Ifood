import { Search } from "lucide-react"

export const Banner = ()=>{
    return(
        <div className="h-[850px] flex justify-center items-center bg-[url('/assets/banner.png')] bg-cover ">
            <div className="max-w-[700px] w-full m-auto  p-5">
                <div className="flex items-center flex-col mb-9">
                    <h1 className="text-[45px] font-semibold text-[#3E3E3E] text-center">Faça mercado no iFood</h1>
                    <p className="font-light text-[#3E3E3E]">Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
                </div>
                <div className="flex justify-center mb-4">
                    <div className="flex items-center mr-3 rounded-md w-[400px] p-2 bg-[#F2F2F2]">
                        <Search color="red" width={20}/>
                        <input className="text-black ml-3 flex-1 bg-transparent w-[300px] " type="text" placeholder="Em qual endereço você está?" />
                    </div>
                    <button className="bg-[#EA1D2C] flex-1 font-normal text-base text-white w-28 rounded-md p-3">Ver Mercados Próximos</button>
                </div>
                <div className=" max-w-[600px] w-full flex items-center  justify-evenly flex-wrap">
                    <div className="text-sm text-center  m-3 p-1 border border-gray-200 text-gray-500 rounded-lg">Frios</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Laticínios</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Feira</div>     
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Bebidas</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Doces</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Massas Frescas</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Limpeza</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Padaria</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Higiene</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Congelados</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Carnes</div>
                    <div className="text-sm text-center  m-3  p-1 border border-gray-200 text-gray-500 rounded-lg">Cervejas</div>
                </div>
            </div>
        </div>
    )
}
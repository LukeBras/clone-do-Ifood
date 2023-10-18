import { ChevronRightIcon } from "lucide-react"

export const Category = ()=>{
    return(
        <div className="h-[500px]  ">
            <div className="max-w-[900px] m-auto" >
                <div className="flex">
                    <div className="flex rounded-2xl m-4  flex-1 bg-red-500 p-5">
                        <div>
                            <h1 className="text-3xl p-3 font-bold text-white">Restaurante</h1>
                            <button className="w-[150px]  h-[40px] mt-8 ml-3 p-3 rounded-xl bg-red-700  flex justify-center items-center text-white">
                                Ver opções
                                <ChevronRightIcon/>
                            </button>
                        </div>
                        <img className="flex items-end w-[200px]" src="./assets/restaurant.png" alt="" />
                    </div>
                    <div className="flex rounded-2xl m-4  flex-1 bg-[#B6D048] p-5">
                        <div>
                            <h1 className="text-3xl p-3 font-bold text-white">Mercado</h1>
                            <button className="w-[150px]  h-[40px] mt-8 ml-3 p-3 rounded-xl bg-[#9EB53E]  flex justify-center items-center text-white">
                               Buscar Lojas
                                <ChevronRightIcon/>
                            </button>
                        </div>
                        <img className="flex" src="./assets/market.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-[900px] mt-9 flex justify-between m-auto">
                <div className="w-[180px] flex flex-col justify-end relative">
                    <img className="rounded-md p-3  w-[150px] max-h-[100px] object-contain absolute left-4 bottom-5" src="./assets/drinks.png"  alt="" />
                    <div className="mb-2 w-full h-[40px] bg-yellow-300 rounded-lg"></div>
                    <h1 className=" w-full flex justify-center text-center font-bold">Bebidas <ChevronRightIcon color="red"/></h1>
                </div>
                <div className="w-[180px] flex flex-col justify-end relative">
                    <img className="rounded-md p-3  w-[150px] max-h-[100px] object-contain absolute left-4 bottom-5" src="./assets/pharmacy.png"  alt="" />
                    <div className="mb-2 w-full h-[40px] bg-[#F9879C] rounded-lg"></div>
                    <h1 className=" w-full flex justify-center text-center font-bold">Bebidas <ChevronRightIcon color="red"/></h1>
                </div>
                <div className="w-[180px] flex flex-col justify-end relative">
                    <img className="rounded-md p-3  w-[150px] max-h-[100px] object-contain absolute left-4 bottom-5" src="./assets/petshop.png"  alt="" />
                    <div className="mb-2 w-full h-[40px] bg-[#8C60C5] rounded-lg"></div>
                    <h1 className=" w-full flex justify-center text-center font-bold">Bebidas <ChevronRightIcon color="red"/></h1>
                </div>
            </div>
            <div className="w-[1200px] mt-12  h-[3px]  m-auto bg-gray-200"></div>
        </div>
    )
}
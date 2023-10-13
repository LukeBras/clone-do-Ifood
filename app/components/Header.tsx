export const Header = ()=>{
    return(
        <header className="h-[120px] bg-[#F7F7F7]">
           <div className="max-w-[1250px] flex justify-between items-center w-full h-full m-auto">
                <a className="flex items-center" href="#">
                    <img className="w-24" src="./assets/ifood.png" alt="" />
                </a>
                <div className="w-[900px]">
                    <ul className="flex">
                        <li className="mr-5 text-base">Entregador</li>
                        <li className="mr-5 text-base" >Restaurante e Mercado</li>
                        <li className="mr-5 text-base">Carreiras</li>
                        <li className="mr-5 text-base">Ifood Card</li>
                    </ul>
                </div>
                <div>
                    <button className="text-[#EA1D2C] mr-4 font-semibold">criar conta</button>
                    <button className="bg-[#EA1D2C] font-semibold text-white w-28 rounded-md p-3">Entrar</button>
                </div>
           </div>
        </header>
    )
}
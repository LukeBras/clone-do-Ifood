import {BadgeCheckIcon} from "lucide-react"

export const Restaurant = ()=>{
    return(
        <div className="h-[500px]  ">
            <div className="max-w-[1200px] m-auto ">   
                <h1 className="text-xl font-bold p-4">Os Melhores restaurantes</h1>
                <div className="max-w-[1200px] flex ">
                    <div className=" w-[300px] mr-5 p-3 border rounded-md border-gray-300">
                        <div className="flex justify-end">
                            <BadgeCheckIcon color="red" width={16}/>
                        </div>
                        <div className="flex items-center ">
                            <img className="w-[70px] rounded-full p-3" src="./assets/mcdonald.png" alt="" />
                            <div>
                                <h2 className="text-sm">Mc Donald</h2>
                                <p className="text-xs">Lanches</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] mr-5  p-2 border rounded-md border-gray-300">
                        <div className="flex justify-end">
                            <BadgeCheckIcon color="red" width={16}/>
                        </div>
                        <div className="flex items-center ">
                            <img className="w-[70px] rounded-full p-3" src="./assets/coco.png" alt="" />
                            <div>
                                <h2 className="text-sm">Coco Bambu</h2>
                                <p className="text-xs">Frutos do mar</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[300px] mr-5  p-2 border rounded-md border-gray-300">
                        <div className="flex justify-end">
                            <BadgeCheckIcon color="red" width={16}/>
                        </div>
                        <div className="flex items-center ">
                            <img className="w-[70px] rounded-full p-3" src="./assets/china.png" alt="" />
                            <div>
                                <h2 className="text-sm">China in Box</h2>
                                <p className="text-xs">Chinesa</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[300px] mr-5  p-2 border rounded-md border-gray-300">
                        <div className="flex justify-end">
                            <BadgeCheckIcon color="red" width={16}/>
                        </div>
                        <div className="flex items-center ">
                            <img className="w-[70px] rounded-full p-3" src="./assets/habibs.png" alt="" />
                            <div>
                                <h2 className="text-sm">Habib's</h2>
                                <p className="text-xs">Lanches</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] mr-5  p-2 border rounded-md border-gray-300">
                        <div className="flex justify-end">
                            <BadgeCheckIcon color="red" width={16}/>
                        </div>
                        <div className="flex items-center ">
                            <img className="w-[70px] rounded-full p-3" src="./assets/outback.png" alt="" />
                            <div>
                                <h2 className="text-sm">Outback Stekhouse</h2>
                                <p className="text-xs">Lanches</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5">
                    <img className="mr-1" src="./assets/landing-banner-1.png" alt="" />
                    <img className="mr-1" src="./assets/landing-banner-2.png" alt="" />
                    <img className="mr-1" src="./assets/landing-banner-3.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}
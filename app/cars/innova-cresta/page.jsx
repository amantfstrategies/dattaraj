import React from 'react'
import { FaRupeeSign, FaShoppingBag, FaCarSide } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { ImManWoman } from "react-icons/im";
import { AiOutlineControl } from "react-icons/ai";
import Image from 'next/image';
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
function Page() {
    return (
        <div  >
            {/* <div className="mx-40 border border-red-500">hello</div> */}
            <div className="relative">
                <Image src='/carImages/innova-cresta.jpg' height={1000} width={1000} alt='audi' className='object-cover origin-center w-full h-[600px]' />
                <div className="ml-40 mt-10  ">
                    <div className="w-3/5 ">
                        <h2 className='text-4xl font-semibold' >Innova Cresta</h2>
                        <div className="border-dashed hover:border-solid border-y-2 px-10 border-black py-4 my-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 "><ImManWoman className='text-xl' /> 4 Passengers</div>
                            <div className="flex items-center gap-2 "><FaShoppingBag className='text-xl' /> 2 Luggages</div>
                            <div className="flex items-center gap-2 "><AiOutlineControl className='text-xl' /> Auto</div>
                            <div className="flex items-center gap-2 "><FaCarSide className='text-xl' /> 4 Doors</div>

                        </div>
                        <div className="my-2">
                            <h2 className='text-2xl font-semibold'>Refueling</h2>
                            <p className='py-1'>
                                Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse.
                            </p>
                        </div>
                        <div className="my-2">
                            <h2 className='text-2xl font-semibold'>Car Wash</h2>
                            <p className='py-1'>
                                Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan sunt. Craft beer elit seitan exercitation, photo booth
                            </p>
                        </div>
                        <div className="my-2">
                            <h2 className='text-2xl font-semibold'>No Smoking</h2>
                            <p className='py-1'>
                                See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 divide-y-2 border-y py-5">
                            <div className="flex justify-between">
                                <h2 className='text-2xl font-semibold'>Included</h2>
                                <div className="grid grid-cols-1 space-y-2 ">
                                    <div className=""><SiTicktick className='inline mr-2' /> Audio Input</div>
                                    <div className=""><SiTicktick className='inline mr-2' /> Bluetooth</div>
                                    <div className=""><SiTicktick className='inline mr-2' /> Heated Seats</div>
                                </div>
                                <div className="grid grid-cols-1 space-y-2 ">
                                    <div className=""><SiTicktick className='inline mr-2' /> All Wheel drive</div>
                                    <div className=""><SiTicktick className='inline mr-2' /> USB Input</div>
                                    <div className=""><SiTicktick className='inline mr-2' /> FM Radio</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 divide-y-2  py-5">
                            <div className="flex justify-between">
                                <h2 className='text-2xl font-semibold'>Not Included</h2>

                                <div className=""><RxCrossCircled className='inline mr-2 font-semibold' /> GPS Navigation</div>
                                <div className=""><RxCrossCircled className='inline mr-2 font-semibold' /> Sun-roof</div>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="absolute border border-black right-36 top-[470px]">
                    <div className="bg-black/70 text-white px-20 py-10">
                        <div className="flex items-center gap-2">
                            <FaRupeeSign className='text-xl' />
                            <h2 className="text-5xl">7000</h2>
                            <h2 className="text-lg">Per Day</h2>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="my-4">
                            <h2 className='pb-2'>Full Name</h2>
                            <input type="text" className='border-b border-black' />
                        </div>
                        <div className="my-4">
                            <h2 className='pb-2'>Email Address</h2>
                            <input type="email" className='border-b border-black' />
                        </div>
                        <div className="my-4">
                            <h2 className='pb-2'>Phone Number</h2>
                            <input type="tel" className='border-b border-black' />
                        </div>
                        <div className="my-4">
                            <h2 className='pb-2'>Pickup Address</h2>
                            <input type="text" className='border-b border-black' />
                        </div>
                        <div className="my-4">
                            <h2 className='pb-2'>Pickup Date</h2>
                            <input type="date" className='border-b border-black' />
                        </div>
                        <div className="my-4">
                            <h2 className='pb-2'>Pickup Time</h2>
                            <input type="time" className='border-b border-black' />
                        </div>
                        <Link href="/car/audi" className="my-4 bg-slate-400 flex justify-center p-4 text-xl font-semibold">
                            Button
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
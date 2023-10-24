import React from "react";
import Image from "next/image";

const Footer = () => {
    return <div className="max-w-full bg-gray-100 ">
        <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                <Image src={'/logoh.png'} alt="Profile"  height={100} width={150}/>
                    <p className="max-w-xs mt-4 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                    </p>
                    <div className="flex mt-8 space-x-6 text-gray-600">

                    </div>
                </div>
                <div className="grid grid-cols-8 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <p className="font-medium  text-primary">
                            Hosting
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a className="hover:opacity-75"  > Airbnb your home</a>
                            <a className="hover:opacity-75"  > AirCover for Hosts</a>
                            <a className="hover:opacity-75"  > Hosting resources</a>
                            <a className="hover:opacity-75"  > Community forum </a>
                            <a className="hover:opacity-75"  > Hosting responsibly </a>
                            <a className="hover:opacity-75"  > Airbnb-friendly apartments</a>
                        </nav>
                    </div>
                    <div>
                        <p className="font-medium text-primary">
                            Support
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a className="hover:opacity-75"  > Help Center</a>
                            <a className="hover:opacity-75"  > AirCover </a>
                            <a className="hover:opacity-75"  > Anti-discrimination </a>
                            <a className="hover:opacity-75"  > Disability support</a>
                            <a className="hover:opacity-75"  > Cancellation options</a>
                            <a className="hover:opacity-75"  > Report neighborhood concern</a>
                        </nav>
                    </div>
                    <div>
                        <p className="font-medium text-primary">
                            Airbnb
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a className="hover:opacity-75"  > Newsroom </a>
                            <a className="hover:opacity-75"  > New features </a>
                            <a className="hover:opacity-75"  > Careers </a>
                            <a className="hover:opacity-75"  > Investors </a>
                            <a className="hover:opacity-75"  > Gift cards </a>
                            <a className="hover:opacity-75"  > Airbnb.org emergency stays</a>
                        </nav>
                    </div>

                </div>
            </div>
            <p className="mt-8 text-xs font-medium text-gray-800">
                © 2023 Hotels&Co
            </p>
        </div>
    </div>
};

export default Footer;
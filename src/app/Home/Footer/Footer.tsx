// 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
"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#fe0000] text-black relative">
           <div className="w-full text-center py-8 px-4">
  <Image
    src="/assets/images/sTUDIO WALL (1).png"
    alt="MAK Management Logo"
    width={1200}   // big enough so it won't pixelate
    height={200}
    className="mx-auto w-full max-w-[1200px] h-auto object-contain"
    priority
  />
</div>


            <div className="max-w-4xl mx-auto text-center px-6 py-20">
                <h4 className="uppercase font-resotho text-sm tracking-wide mb-2 font-resotho">Stay in the know</h4>
                <p className="text-lg font-medium mb-8 font-resotho">
                    Exclusive Insights & Anticipated Events
                </p>

                <form className="flex flex-col items-center space-y-6">
                    <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full border-b border-black bg-transparent py-2 text-center focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full border-b border-black bg-transparent py-2 text-center focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full"
                    >
                        <ArrowRight size={20} />
                    </button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 py-16 text-sm text-center md:text-left">
                <div>
                    <h5 className="font-medium font-resotho mb-2">ADDRESS</h5>
                    <p className="font-resotho">
                        MAK Management <br />
                        Carrer de s’Espartar, 4 <br />
                        07800 Ibiza <br />
                        España
                    </p>
                </div>

                <div>
                    <h5 className="font-medium font-resotho mb-2 font-resotho">MATTHIAS KLINGLER</h5>
                    <p className="font-lato">
                        matthias@mak-management.com <br />
                        +43 676 50 60 50 4
                    </p>
                </div>

                <div>
                    <h5 className="font-medium font-resotho mb-2">ANNA SAGI</h5>
                    <p className="font-lato">
                        anna@mak-management.com <br />
                        +43 676 50 60 50 7
                    </p>
                </div>

                <div>
                    <h5 className="font-medium font-resotho mb-2">SOCIAL MEDIA</h5>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-black/30 py-4 text-xs px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="font-lato">© 2024 MAK Management GmbH</p>
                <div className="font-lato flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <span>Made by BFS</span>
                </div>
            </div>
        </footer>
    );
}

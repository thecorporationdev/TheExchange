"use client";
// 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
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#fe0000] text-black relative">
            <div className="w-full text-center py-8 px-4">
  <h1 className="text-black text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide uppercase leading-tight">
    MAK MANAGEMENT
  </h1>
</div>

            <div className="max-w-4xl mx-auto text-center px-6 py-20">
                <h4 className="uppercase text-sm tracking-wide mb-2">Stay in the know</h4>
                <p className="text-lg font-medium mb-8">
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
                    <h5 className="font-medium mb-2">ADDRESS</h5>
                    <p>
                        MAK Management <br />
                        Carrer de s’Espartar, 4 <br />
                        07800 Ibiza <br />
                        España
                    </p>
                </div>

                <div>
                    <h5 className="font-medium mb-2">MATTHIAS KLINGLER</h5>
                    <p>
                        matthias@mak-management.com <br />
                        +43 676 50 60 50 4
                    </p>
                </div>

                <div>
                    <h5 className="font-medium mb-2">ANNA SAGI</h5>
                    <p>
                        anna@mak-management.com <br />
                        +43 676 50 60 50 7
                    </p>
                </div>

                <div>
                    <h5 className="font-medium mb-2">SOCIAL MEDIA</h5>
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
                <p>© 2024 MAK Management GmbH</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <span>Made by BFS</span>
                </div>
            </div>
        </footer>
    );
}

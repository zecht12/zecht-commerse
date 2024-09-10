"use client";

import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { News } from "@/data/news";

export default function NewsDetailsPage() {
    const searchParams = useSearchParams();

    const head = searchParams?.get("Head");
    const subHead = searchParams?.get("SubHead");
    const image = searchParams?.get("Image");
    const description = searchParams?.get("Description");

    const getLimitedDescription = (desc: string) => {
        if (!desc) return "";
        const words = desc.split(" ");
        return words.length > 10 ? words.slice(0, 10).join(" ") + "..." : desc;
    };

    return (
        <>
            {/* cover project */}
            <div className="w-full h-screen bg-aboutpage bg-cover bg-center">
                <div className="h-full w-full py-[125px] px-8 flex items-end justify-center bg-black/80">
                    <motion.div className="w-[60%] flex flex-col items-center justify-center">
                        {/* text yang dibagi menjadi 60% */}
                        <div>
                            <p className="text-6xl font-bold text-center text-slate-100">
                                KABAR TERBARU DARI
                                <span className="text-[#2f7d32]"> KOMUNITAS </span>
                                KAMI
                            </p>
                        </div>
                        <div className="py-8">
                            <p className="text-slate-100 text-center text-md">
                                Ikuti perkembangan terbaru dan aktivitas seru
                            </p>
                            <p className="text-slate-100 text-center text-md">
                                yang dilakukan oleh warga dalam menjaga lingkungan kita.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link
                                href="#news"
                                className="flex items-center gap-2 text-slate-100 bg-[#2f7d32] px-4 py-2 rounded-lg font-bold"
                            >
                                BERITA TERBARU
                                <IoArrowDownCircleOutline
                                    size={24}
                                    className=" text-slate-100"
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="flex items-start justify-center gap-12 p-8">
                <div className="w-[70%] h-full border-[3px] border-[#2f7d32] bg-slate-100 shadow-lg shadow-black p-4 rounded-md">
                    <h1 className="text-4xl font-bold text-[#2f7d32]">{head}</h1>
                    <p className="text-lg font-semibold text-[#2f7d32]">{subHead}</p>
                    <div className="my-4 flex items-center justify-center">
                        <Image
                            src={`${image}`}
                            alt={`${head}`}
                            width={1000}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text-lg text-[#2f7d32]">{description}</p>
                </div>
                <div className="w-[30%]">
                    <p className="text-2xl font-bold text-[#2f7d32]">
                        BERITA LAINNYA
                    </p>
                    <div className="w-full h-[3px] bg-[#2f7d32] my-2"></div>
                    {News.map((news, index) => {
                        return (
                            <motion.div key={index} className="my-2">
                                <Link
                                    href={{
                                        pathname: `/news/${news.id}`,
                                        query: {
                                            id: news.id,
                                            Head: news.Head,
                                            SubHead: news.SubHead,
                                            Image: news.Image,
                                            Description: news.Description,
                                        },
                                    }}
                                    passHref
                                >
                                    <div className="flex gap-2">
                                        <div className="w-[30%] flex items-center justify-center">
                                            <Image
                                                src={`${news.Image}`}
                                                alt={`${news.Head}`}
                                                width={1000}
                                                height={500}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="w-[70%]">
                                            <h1 className="text-md font-bold text-[#2f7d32]">{news.Head}</h1>
                                            <p className="text-base text-[#2f7d32]">{news.SubHead}</p>
                                            <p className="text-base text-[#2f7d32]">
                                                {getLimitedDescription(news.Description)}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

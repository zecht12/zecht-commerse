"use client";

import React, { useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Baju, Product, Pupuk } from "@/data/product";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetailsPage() {
    const [currentCategory] = useState("Product");
    const searchParams = useSearchParams();

    const head = searchParams?.get("Head");
    const subHead = searchParams?.get("SubHead");
    const image = searchParams?.get("Image");
    const description = searchParams?.get("Description");
    const harga = searchParams?.get("Harga");
    const linkWa = searchParams?.get("LinkWa");

    return (
        <>
            {/* cover product */}
            <div className="w-full h-screen bg-aboutpage bg-cover bg-center">
                <div className="h-full w-full py-[125px] px-8 flex items-end justify-center bg-black/80">
                    <motion.div className="w-[60%] flex flex-col items-center justify-center">
                        {/* text */}
                        <div>
                            <p className="text-6xl font-bold text-center text-slate-100">
                                INOVASI<span className="text-[#2f7d32]"> HIJAU </span>DARI
                                <span className="text-[#2f7d32]"> KOMUNITAS </span>KAMI
                            </p>
                        </div>
                        <div className="py-8">
                            <p className="text-slate-100 text-center text-md">
                                Produk berkualitas hasil daur ulang, dibuat dengan cinta oleh
                                warga lokal untuk masa depan yang lebih baik.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link
                                href="#product"
                                className="flex items-center gap-2 text-slate-100 bg-[#2f7d32] px-4 py-2 rounded-lg font-bold"
                            >
                                LIHAT PRODUK
                                <IoArrowDownCircleOutline
                                    size={24}
                                    className="text-slate-100"
                                />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* product */}
            <div id="product" className="h-auto w-full bg-[#f5f5db] py-[125px] px-8">
                <div className="flex md:flex-row flex-col items-start justify-center gap-8">
                    <div className="h-full xl:w-[70%] md:w-[80%] sm:w-[90%] w-full border-[3px] border-[#2f7d32] p-8">
                        <div className="flex md:flex-row flex-col items-center justify-center gap-4">
                            <div className="h-full xl:w-[50%] md:w-[70%] sm:w-[90%] w-full">
                                <p className="text-xl font-bold text-[#2f7d32] ">{head}</p>
                                <div className="py-2">
                                    <p className="text-md font-bold text-[#2f7d32]">{subHead}</p>
                                </div>
                                <div className="my-2">
                                    <Image
                                        src={`${image}`}
                                        alt={`${head}`}
                                        width={1000}
                                        height={1000}
                                        className="md:w-[250px] w-full h-[250px]"
                                    />
                                </div>
                            </div>
                            <div className="h-full xl:w-[50%] md:w-[70%] sm:w-[90%] w-full">
                                <p className="text-base text-[#2f7d32]">{description}</p>
                                <p className="text-lg font-bold text-[#2f7d32] pt-6">HARGA</p>
                                <p className="text-lg font-bold text-[#2f7d32]">Rp {harga}</p>
                                <p className="text-lg font-bold text-[#2f7d32] pt-6">
                                    PRE-ORDER
                                </p>
                                <div className="w-[60%]">
                                    <Link
                                        href={`${linkWa}`}
                                        className="bg-[#2f7d32] flex items-center justify-center gap-2 text-slate-100 hover:scale-110 p-4 rounded-md"
                                    >
                                        <FaWhatsapp className="text-slate-100" size={24} />
                                        <p>Whatsapp</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Daftar (Categories) */}
                    <div className="h-full 2xl:w-[30%] xl:w-[50%] md:w-[70%] sm:w-[90%] w-full">
                        <p className="text-2xl font-bold text-[#2f7d32]">DAFTAR</p>
                        <div className="w-full h-[3px] bg-[#2f7d32] my-2"></div>
                        <div className="py-2">
                            <Link
                                className={`text-[#2f7d32] ${currentCategory === "Pupuk" ? "font-bold" : ""
                                    }`}
                                href="/product"
                            >
                                Product
                            </Link>
                            {Product.map((Product) => {
                                return (
                                    <motion.div key={Product.id}>
                                        <Link
                                            className="text-[#2f7d32]"
                                            href={{
                                                pathname: `/product/${Product.id}`,
                                                query: {
                                                    id: Product.id,
                                                    Head: Product.Head,
                                                    SubHead: Product.SubHead,
                                                    Image: Product.Image,
                                                    Description: Product.Description,
                                                    Harga: Product.Harga,
                                                    LinkWa: Product.LinkWa,
                                                },
                                            }}
                                            passHref
                                        >
                                            - {Product.Head}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="py-2">
                            <Link
                                className={`text-[#2f7d32] ${currentCategory === "Pupuk" ? "font-bold" : ""
                                    }`}
                                href="/product"
                            >
                                Baju
                            </Link>
                            {Baju.map((Baju) => {
                                return (
                                    <motion.div key={Baju.id}>
                                        <Link
                                            className="text-[#2f7d32]"
                                            href={{
                                                pathname: `/product/${Baju.id}`,
                                                query: {
                                                    id: Baju.id,
                                                    Head: Baju.Head,
                                                    SubHead: Baju.SubHead,
                                                    Image: Baju.Image,
                                                    Description: Baju.Description,
                                                    Harga: Baju.Harga,
                                                    LinkWa: Baju.LinkWa,
                                                },
                                            }}
                                            passHref
                                        >
                                            - {Baju.Head}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="py-2">
                            <Link
                                className={`text-[#2f7d32] ${currentCategory === "Pupuk" ? "font-bold" : ""
                                    }`}
                                href="/product"
                            >
                                Pupuk
                            </Link>
                            {Pupuk.map((Pupuk) => {
                                return (
                                    <motion.div key={Pupuk.id}>
                                        <Link
                                            className="text-[#2f7d32]"
                                            href={{
                                                pathname: `/product/${Pupuk.id}`,
                                                query: {
                                                    id: Pupuk.id,
                                                    Head: Pupuk.Head,
                                                    SubHead: Pupuk.SubHead,
                                                    Image: Pupuk.Image,
                                                    Description: Pupuk.Description,
                                                    Harga: Pupuk.Harga,
                                                    LinkWa: Pupuk.LinkWa,
                                                },
                                            }}
                                            passHref
                                        >
                                            - {Pupuk.Head}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

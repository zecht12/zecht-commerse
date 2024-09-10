"use client";

import React, { useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { News } from "@/data/news"

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedNews = News.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < News.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
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
      {/* news */}
      <div id="news" className="h-auto w-full bg-[#f5f5db] py-[125px] px-8">
        <div className="h-full w-full gap-8">
          <motion.div className="pb-[85px]">
            <p className="text-4xl font-bold text-center text-[#2f7d32]">
              APA YANG KAMI LAKUKAN?
            </p>
          </motion.div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {paginatedNews.map((news, index) => {
              return (
                <motion.div
                  key={index}
                  className="border-[3px] border-[#2f7d32] bg-slate-100 shadow-lg shadow-black p-4 rounded-md hover:scale-110"
                >
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
                    <div className="m-5">
                      <p className="text-xl text-justify font-bold text-[#2f7d32] ">
                        {news.Head}
                      </p>
                      <div className="py-2">
                        <p className="text-md font-bold text-[#2f7d32]">
                          {news.SubHead}
                        </p>
                      </div>
                      <div>
                        <Image
                          alt="misi"
                          src={news.Image}
                          width="1000"
                          height="1000"
                          className="w-full h-[250px]"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="text-[#2f7d32] flex font-bold"
            >
              <MdKeyboardDoubleArrowLeft size={24} className="text-[#2f7d32]" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={(currentPage + 1) * ITEMS_PER_PAGE >= News.length}
              className="text-[#2f7d32] flex font-bold"
            >
              Next
              <MdKeyboardDoubleArrowRight
                size={24}
                className="text-[#2f7d32]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

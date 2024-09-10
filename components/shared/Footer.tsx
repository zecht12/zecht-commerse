import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* Background Image */}
      <div className="relative w-full h-auto">
        <Image
          src="/assets/image/footerBahan.png"
          alt="footer-background"
          layout="responsive"
          width={1500}
          height={500}
        />
      </div>

      <footer className="bg-[#2c8d32] text-gray-200 py-10 px-4">
        {/* Footer Content */}
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* PESAN */}
          <div className="order-1 md:order-2 space-y-4">
            <h3 className="font-bold text-xl">PESAN</h3>
            <p className="mb-4">
              &quot;Berikan kesan dan pesan serta kritikan untuk kami agar kami
              dapat lebih baik ke depannya.&quot;
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="*Email"
                className="w-full px-4 py-2 bg-white text-black rounded-md"
              />
              <textarea
                placeholder="*Ketik Pesan..."
                className="w-full px-4 py-2 bg-white text-black rounded-md"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md"
              >
                KIRIM
              </button>
            </form>
          </div>

          {/* LOGO & NAMA BRAND */}
          <div className="order-2 md:order-1 space-y-4">
            <h3 className="font-bold text-xl">LOGO & NAMA BRAND</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang-kami">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/produk">Produk</Link>
              </li>
              <li>
                <Link href="/berita">Berita</Link>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="https://facebook.com">
                <Image
                  src="/assets/image/facebook-icon.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://instagram.com">
                <Image
                  src="/assets/image/instagram-icon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* KONTAK */}
          <div className="order-3 space-y-4">
            <h3 className="font-bold text-xl">KONTAK</h3>
            <p className="mb-2">(027)-2256-8420</p>
            <p className="mb-2">
              Jl. Bromo VII, Gebang RT02,RW16 Banjarsari, Surakarta, Jawa Tengah
              57136
            </p>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Text */}
      <div className="bg-[#2e7d32] w-full py-4 flex flex-col md:flex-row justify-between items-center px-4 text-[#f5f5dc]">
        <div className="mb-2 md:mb-0">
          <p>&copy; 2024 EcoSmart. All rights reserved.</p>
        </div>
        <div>
          <p>
            Website by{" "}
            <Link href="https://orenix-studios.com" className="underline">
              GILGUL Studios
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

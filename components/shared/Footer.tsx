import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-blue-600 border-[0.5px]">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/zaaa.svg"
            alt="logo"
            width={38}
            height={38}
          />
        </Link>

        <p className="bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent">2024 ZA A' YENE . Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
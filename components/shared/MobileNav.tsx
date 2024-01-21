import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from '../ui/separator'
import NavItems from './NavItems'
  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <Image 
                    src="/assets/icons/menu.svg" 
                    alt="menu"
                    width={24}
                    height={24}
                    className='cursor-pointer'
                    
                />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                <Image 
                    src="/assets/images/zaaa.svg" 
                    alt="logo"
                    width={24}
                    height={24}
                    className='cursor-pointer'
                    
                />
                <Separator className=' border-pink-600 border-[0.5px]' />
                <NavItems />

            </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MobileNav
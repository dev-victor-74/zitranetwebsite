"use client"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { DialogTitle } from "@radix-ui/react-dialog"
import ContactInfo from "./contact-info"
import { cn } from "@/lib/utils"


const MobileNavigation = () => {
  const pathname  = usePathname();

  const routes =
     [
      {
          label: "Home",
          path : "/"
      },
      {
          label: "About",
          path : "/about"
      },
      {
          label: "Services",
          path : "/services"
      },
      {
          label: "Contact",
          path : "/contact"
      },
   
     ];

  return (
    <Sheet>
      <SheetTrigger>
              <Menu className="text-zinc-900"/>
      </SheetTrigger>
      <SheetContent className="px-5 py-4 h-full flex flex-col justify-between" side="right">
        <DialogTitle className="text-zinc-800 text-sm font-bold ml-5">
             {/* Zitranet */}
        </DialogTitle>
      <div className="flex w-full flex-col items-center gap-4 mt-10 ">
             {
                routes.map((route:{label:string, path:string})=>(
                    <Link href={route.path} key={route.label}
                     className={cn("text-sm font-semibold w-[90%] text-center px-4 py-2 rounded-full transition hover:text-[#91073b] text-zinc-800",pathname === route.path && "text-zinc-200 bg-[#91073b]")}
                    >
                       <p className="text-inherit">
                          {route.label}
                       </p>
                    </Link>
                ))
             }
          </div>
          <div className="mt-auto pr-2 pl-0">
             <ContactInfo/>
          </div>
      </SheetContent>
   </Sheet>

  )
}

export default MobileNavigation
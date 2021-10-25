import { SearchIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
interface HeaderProps{
    navbarState:boolean
}
const Header = ({navbarState}:HeaderProps) => {
    return (
        <div className={`py-5 grid place-items-center sticky top-0 z-20 ${navbarState && 'bg-black'} transition`}>
            <div className="bg-white flex space-x-2 items-center px-4 rounded-full overflow-hidden">
                <SearchIcon className="h-6 w-6 text-black"/>
                <input className="outline-none p-2 text-black" type="text" placeholder="Search your song" />
            </div>
        </div>
    )
}

export default Header

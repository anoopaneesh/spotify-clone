import { SearchIcon } from "@heroicons/react/solid"
interface HeaderProps{
    navbarState:boolean
    searchTerm?:string
    setSearchTerm?:any
}
const Header = ({navbarState,searchTerm,setSearchTerm}:HeaderProps) => {
    return (
        <div className={`py-5 grid place-items-center sticky top-0 z-20 ${navbarState && 'bg-black'} transition`}>
            <div className="bg-white flex space-x-2 items-center px-4 rounded-full overflow-hidden">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="outline-none p-2 text-black" type="text" placeholder="Search your song" />
                <SearchIcon className="h-6 w-6 text-black"/>
            </div>
        </div>
    )
}

export default Header

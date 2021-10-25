import Image from 'next/image'
import logo from '../images/spotify.svg'
import {HomeIcon,HeartIcon} from '@heroicons/react/solid'
import {SearchIcon,CollectionIcon,PlusIcon} from '@heroicons/react/outline'
const Sidebar = () => {
  return (
      <div className="h-full w-60 bg-black fixed hidden md:inline-block">
        <div className="relative w-36 h-10 mx-auto mt-8">
          <Image src={logo} layout="fill" />
        </div>
        <div className="mt-8 px-2 space-y-2">
          <div className="text-white bg-white text-sm bg-opacity-10 flex space-x-3 rounded-sm p-2 items-center cursor-pointer">
            <HomeIcon className="h-6 w-6" />
            <p className="font-bold">Home</p>
          </div>
          <div className="text-gray-400 bg-black flex text-sm space-x-3 rounded-sm p-2 items-center cursor-pointer hover:text-white">
            <SearchIcon className="w-6 h-6" />
            <p className="font-bold">Search</p>
          </div>
          <div className="text-gray-400 bg-black text-sm flex space-x-3 rounded-sm p-2 items-center cursor-pointer hover:text-white">
            <CollectionIcon className="h-6 w-6" />
            <p className="font-bold">Library</p>
          </div>
        </div>
        <div className="mt-8 px-2 space-y-2">
          <div className="group text-gray-400 transition bg-black flex text-sm space-x-3 rounded-sm p-2 items-center cursor-pointer hover:text-white">
            <div className="group-hover:bg-white transition grid place-items-center bg-gray-400 w-6 h-6 p-1 text-black rounded-sm">
              <PlusIcon />
            </div>
            <p className="font-bold">Create Playlist</p>
          </div>
          <div className="group text-gray-400 transition bg-black flex text-sm space-x-3 rounded-sm p-2 items-center cursor-pointer hover:text-white">
            <div className="transition grid place-items-center bg-gradient-to-br from-purple-700 via-purple-400 to-blue-300 w-6 h-6 p-1 text-white rounded-sm">
             <HeartIcon />
            </div>
            <p className="font-bold">Liked songs</p>
          </div>
        </div>
        <div className="mt-5 px-2">
          <hr className="border-white border-opacity-25" />
        </div>
      </div>
  );
};

export default Sidebar;

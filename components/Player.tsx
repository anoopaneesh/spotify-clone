import { PlayIcon } from "@heroicons/react/solid"
import Image from 'next/image'
import NextIcon from "./icons/NextIcon"
import PrevIcon from "./icons/PrevIcon"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from "@chakra-ui/react"
const Player = () => {
    const handleChange = (e:any) => {
        console.log(e)
    }
    return (
        <div className="fixed bottom-0 z-20 text-white h-24 w-full bg-[#181818] border-t border-gray-700 grid grid-cols-2 md:grid-cols-3 px-8">
            {/* Left */}
            <div className="md:flex hidden items-center space-x-4">
                <div className="relative w-20 h-20">
                <Image
              src="https://i.scdn.co/image/ab67616d00001e02a75c2f26913099a420050f01"
              layout="fill"
            />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-sm text-white">Raataan Lambiyan (From "Shershaah")</p>
                    <p className="text-xs text-gray-500">Tanishk Bagchi,Jubin Nautiyal,Asees Kaur</p>
                </div>
            </div>
            {/* Middle */}
            <div className="flex-1 flex flex-col space-y-2 items-center justify-center">
                <div className="flex space-x-2 items-center"><PrevIcon color="gray" height="20px" width="20px"/>
                <PlayIcon className="h-11 w-11 hover:scale-105 cursor-pointer" />
                <NextIcon color="gray" height="20px" width="20px"/>
                </div>
                <div className="w-full bg-white bg-opacity-10 overflow-hidden rounded-full h-1">
                    <div className="w-1/2 h-full bg-white"></div>
                </div>
            </div>
            {/* Right */}
            <div className="flex justify-end items-center">
                <div className="w-32">
                <Slider aria-label="slider-ex-2" colorScheme="green" defaultValue={30} onChangeEnd={handleChange}>
                <SliderTrack>
                <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>
                </div>
            </div>
        </div>
    )
}

export default Player

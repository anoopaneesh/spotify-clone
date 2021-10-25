import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import AlbumContainer from "../components/AlbumContainer"
import Header from "../components/Header"
import Player from "../components/Player"
import Sidebar from "../components/Sidebar"
import dummyData from '../data/demo'
import newReleases from "../data/new-releases"
import featuredPlaylists from "../data/featured-playlists"
import focusPlaylists from "../data/focus-playlists"
import { Album } from "../types/Album"
import { Collection } from "../types/DemoType"
import { Playlist } from "../types/Playlist"
interface IndexProps{
  demo:Collection[]
  new_releases:Album[]
  featured_playlists:Playlist[],
  focus_playlists:Playlist[]
}
const index = ({demo,new_releases,featured_playlists,focus_playlists}:IndexProps) => {
  const [navbarState,setNavbarState] = useState(false)
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 2){
              setNavbarState(true)
            }else{
              setNavbarState(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <div>
      <main className="font-poppins">
        {/* left side */}
        <section>
          <Sidebar />
        </section>
        {/* right side */}
        <section className="md:ml-60 bg-black bg-opacity-90 flex-grow text-white pb-24">
          <Header navbarState={navbarState} />
          <div className="space-y-10">
          <AlbumContainer label="New Releases" albums={new_releases}/>
          <AlbumContainer label="Editors Picks" playlists={featured_playlists}/>
          <AlbumContainer label="Focus" playlists={focus_playlists}/>
          {/* {demo.map(cl => (<AlbumContainer key={cl.label} label={cl.label} albums={cl.albums} />))} */}
          </div>
        </section>
        <section>
          <Player />
        </section>
      </main>
    </div>
  )
}

export default index

export const getServerSideProps : GetServerSideProps = async (context) => {
  let new_releases : Album[] = newReleases.albums.items.map(item => {
    return {
      album_type:item.album_type,
      id:item.id,
      name:item.name,
      images:item.images,
      artists:item.artists
    }
  })
  let featured_playlists : Playlist[] = featuredPlaylists.playlists.items.map(item => {
    return {
      id:item.id,
      name:item.name,
      images:item.images,
      description:item.description
    }
  })
  let focus_playlists : Playlist[] = focusPlaylists.playlists.items.map(item => {
    return {
      id:item.id,
      name:item.name,
      images:item.images,
      description:item.description
    }
  })
  return {
    props:{ 
      demo:dummyData,
      new_releases,
      featured_playlists,
      focus_playlists
    }
  }
}
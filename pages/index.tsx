import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import AlbumContainer from "../components/AlbumContainer"
import Header from "../components/Header"
import Head from 'next/head'
import Player from "../components/Player"
import Sidebar from "../components/Sidebar"
import newReleases from "../data/new-releases"
import featuredPlaylists from "../data/featured-playlists"
import focusPlaylists from "../data/focus-playlists"
import { Album } from "../types/Album"
import { Playlist } from "../types/Playlist"
import { useUser } from "../context/UserProvider"
import { useRouter } from "next/router"
import { getSearchResults } from "../helpers/spotify-api"
interface IndexProps{
  new_releases:Album[]
  featured_playlists:Playlist[],
  focus_playlists:Playlist[]
}
const index = ({new_releases,featured_playlists,focus_playlists}:IndexProps) => {
  const [navbarState,setNavbarState] = useState(false)
  const {user} = useUser()
  const router = useRouter()
  const [searchTerm,setSearchTerm] = useState("")
  const [albums,setAlbums] = useState<Album[]>([])
  const [playlists,setPlaylists] = useState<Playlist[]>([])
  console.log({albums,playlists})
  let cancel = false
  useEffect(()=>{
      if(searchTerm && searchTerm.length && user && user.token){
          cancel = false
          getSearchResults(searchTerm,user.token.access_token).then((data)=>{
              if(!cancel){
                  setAlbums(data.albums)
                  setPlaylists(data.playlists)
              }     
          })
      }
      return () => {
          cancel = true
      }
  },[searchTerm])
    useEffect(()=>{
        if(user === null || user.token === null){
          router.push('/login')
        }
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
      <Head>
      <title>
          Spotify Clone | Creative World Inc.
        </title>
        </Head>
      <main className="font-poppins">
        {/* left side */}
        <section>
          <Sidebar />
        </section>
        {/* right side */}
        <section className="md:ml-60 bg-black bg-opacity-90 flex-grow text-white pb-24 min-h-screen">
        <Header navbarState={false} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <div className="space-y-10">
          {albums.length ? <AlbumContainer label="Albums" albums={albums}/>:<></>}
          {playlists.length ? <AlbumContainer label="Playlists" playlists={playlists}/>:<></>}
          <AlbumContainer label="New Releases" albums={new_releases}/>
          
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
      new_releases,
      featured_playlists,
      focus_playlists
    }
  }
}
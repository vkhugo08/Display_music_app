import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isfetching, error} = useGetTopChartsQuery();
    const genreTitle = 'Pop'

    if(isfetching) return <Loader title="Loading song..."/>;
    if(error) return <Error/>;
    console.log(data)
    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3x1 text-white text-left'>
                    Explorer{genreTitle}</h2>
                <select
                onChange={() => {}}
                value = ""
                className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                >
                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>

            <div className='flex flex-wrap sm:justity-start justify-center gap-8'>
                {data?.tracks.map((song, i) => (
                    <SongCard
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    i={i}
                    data={data}
                    />
                ))}
            </div>
        </div>
    );  
};

export default Discover;

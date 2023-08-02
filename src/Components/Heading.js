import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
const Heading = () => {
  return (
    <>
    <div className="sticky top-0 header z-10 h-16 p-4 text-white text-3xl font-semibold flex flex-wrap flex-row justify-between content-center bg-black border-b-2 border-double border-pink-200">
      <Link to={"/"}><h1><span className="text-rose-600">Filmy</span>Verse</h1></Link>
      <Link to={"/addmovie"}><Button><AddIcon className='mr-3' color='seccess'/><span className='text-white text-xl' ><span className='text-rose-600'>ADD</span>-MOVIE</span> </Button></Link>
    </div>
    </>
  )
}

export default Heading


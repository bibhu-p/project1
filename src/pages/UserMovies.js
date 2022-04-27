import axios from 'axios';
import { useState , useEffect} from 'react';
import { Button} from 'react-bootstrap';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine , RiAddBoxLine} from "react-icons/ri";
import MovieModal from '../Components/MovieModal';

const UserMovies =()=>{

    const [movieData, setMovieData] = useState([]);
    const [movieModalVisible, setMovieModalVisible] = useState(false);
    const [action, setAction] = useState('add');
    const [index, setIndex] = useState(null)
    const token = JSON.parse(localStorage.getItem('authToken'));
    
    const getMovieData =()=>{
        axios.get('http://localhost:5000/api/movie/find',{ headers: { 'auth-token': token } })
        .then((response)=>{
          return setMovieData(response.data);
        })
        .catch((error)=>{
          return console.log(error);
        })
      }
      useEffect(()=>{
        getMovieData()
      },[])

      const viewData = (i)=>{
        setIndex(i)
        setAction('edit')
        setMovieModalVisible(true)
      }

      const createModal = ()=>{
        setMovieModalVisible(true)
        setAction('add')
      }
      const onDelete = (i)=>{
        const movieDetails = movieData[i];
        let url = 'http://localhost:5000/api/movie/delete/'+movieDetails._id;
        axios.delete(url,{ headers: { 'auth-token': token } })
        .then((response)=>{
          getMovieData()
          return console.log(response);
        })
        .catch((error)=>{
          return console.log(error);
        })
      }
    return(
        <div className="container">
            <Button className='float-end mt-3 border-0 add-btn' onClick={createModal}><RiAddBoxLine/> Movie</Button>
            <h3 className='text-center mt-2 mb-3'>MOVIE DATA</h3>
            <div className='table-div mt-5'>
                <table >
                    <thead>
                    <tr className='t-head'>
                        <th>SL NO</th>
                        <th>Name</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Hero</th>
                        <th>Heroine</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movieData.length > 0 && movieData.map((data, i) => 
                        <tr key={i} className='t-body'>
                            <td>{i + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.director}</td> 
                            <td>{data.producer}</td>
                            <td>{data.hero}</td>
                            <td>{data.heroine}</td>
                            <td><button className='border-0 rounded ed-btn' onClick={()=>viewData(i)} ><BiEditAlt color='white' /></button><button  className='ms-3 border-0 rounded ed-btn'  onClick={()=>onDelete(i)}><RiDeleteBinLine color='white' /></button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            {movieModalVisible && <MovieModal
                setMovieModalVisible = {setMovieModalVisible}
                action = {action}
                movieData = {movieData}
                getMovieData = {getMovieData}
                editIndex={index}
            />}
        </div>
    )
}
export default UserMovies;
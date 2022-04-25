import {Table , Button} from 'react-bootstrap';

const AdminMovies =()=>{
    const createModal = ()=>{

    }
    return(
        <div className="container">
            <Button className='float-end' style={{"backgroundColor":'transparent',"color":"black","border":"1px solid black"}} onClick={createModal}>Add Movie</Button>
            <h3 className='text-center mb-3'>MOVIE DATA</h3>
            <Table bordered >
                <thead>
                <tr>
                    <th>SL NO</th>
                    <th>Name</th>
                    <th>Director</th>
                    <th>Producer</th>
                    <th>Hero</th>
                    <th>Heroine</th>
                    <th>Action</th>
                </tr>
                </thead>
                {/* <tbody>
                {myState.map((data, i) => 
                    <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.age}</td>
                    <td><Button style={{"backgroundColor":"#b8ccf3", "border":"none"}} onClick={()=>viewData(i)} ><BiEditAlt color='black' /></Button><Button style={{"backgroundColor":"#b8ccf3", "border":"none", "marginLeft":"10px"}}  onClick={()=>onDelete(i)}><RiDeleteBinLine color='black' /></Button></td>
                    </tr>
                )}
                </tbody> */}
            </Table>
        </div>
    )
}
export default AdminMovies;
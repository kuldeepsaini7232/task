import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../action/action';
import './card.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Card = ({ item, Delete }) => {
    return(
        <div>
        {item.map((ele)=>{
            return <div className='card' key={ele.id}>
         <h3>{ele.date}</h3>
         <h6>{ele.dream}</h6>
         <h5>{ele.tag}</h5>
         <DeleteOutlineIcon style={{ fontSize:"36px"}}className='btn' onClick={()=>Delete(ele.id)}/>
        </div>
        })}
        </div>
    )
}
const mapStateToProps = state => ({
    item: state.item,
})
const mapDispatchToProps = dispatch => ({
    Delete: id => {
        dispatch(removeItem(id))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);
import React, { useState } from 'react';
import moment from 'moment';
import CloseIcon from '@material-ui/icons/Close';
import './Box.css';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { addItem } from '../action/action';

const Box = ({ open, close, addItem }) => {
    const today = moment().format("MMM Do");
    const [dream, setDream] = useState("");
    const [tag, setTag] = useState('');
    const handleSubmit = () => {
        if (dream === '') {
            return alert("Please Enter Something");
        }
        const Item = {
            dream: dream,
            id: v4(),
            tag: tag,
            date:moment().format("MMM Do"),
            color:'red',
        }
        addItem(Item)
        setDream('');
        setTag('');
        close();//this method we get as props
    }
    return (
        <div className="box" style={{ display: open ? 'block' : 'none' }}>
            <div>
                <CloseIcon onClick={close} style={{ color: 'white', fontSize: '28px' }} />
                <h3>{today}</h3>
                <button onClick={handleSubmit}>Save</button>
                <textarea rows="10" cols="50" value={dream} onChange={e => setDream(e.target.value)} placeholder="Enter your dream here"></textarea>
                <div>
                    <h4>Enter your tag:</h4>
                    <input type="text" placeholder="Add tag" value={tag} onChange={e => setTag(e.target.value)}></input>
                </div>
            </div>
        </div>
    );

};
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addItem: Item => {
        dispatch(addItem(Item))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Box)
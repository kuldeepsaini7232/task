import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './header.css'


const Header = () => {
    return (
        <div className="header">
        <h1>lucci</h1>
        <div>
        <SearchIcon style={{fontSize:'44px',color:'pink',marginRight:'8px'}}/>
        <ExitToAppIcon style={{fontSize:'44px',color:'pink',marginRight:'8px'}}/>
        </div>
        </div>
      
    )
}


export default Header;
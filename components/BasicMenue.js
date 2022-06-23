import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenue = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="!capitalize !text-white md:!hidden"

        >
        Browse
        </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                className="menu"
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}>
                
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>TV Shows</MenuItem>
                <MenuItem onClick={handleClose}>Movies</MenuItem>
                <MenuItem onClick={handleClose}>New And Popular</MenuItem>
                <MenuItem onClick={handleClose}>My List</MenuItem>
            </Menu>
        </div>
    );
}

export default BasicMenue
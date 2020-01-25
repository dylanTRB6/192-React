import React from 'react';
import {
  Link
} from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
}));
export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const handleMobileMenuOpen = event => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
    const renderMobileMenu = (
      <Menu anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
            <Typography component={Link} to='/eatery' style={{textDecoration:'none'}} color="inherit">
              Show Eateries
            </Typography>
        </MenuItem>  
        <MenuItem>
            <Button component={Link} to='/add-eatery' style={{backgroundColor:orange[500], color:grey[50]}}>Add Eatery</Button>
        </MenuItem>  
      </Menu>
    )

    return(
        <div className = {classes.grow}>
            <Appbar position='static' style={{ backgroundColor: red[500] }}>
                <Toolbar>
                    <Typography style={{textDecoration:'none'}} component ={Link} to='/' className='title'
                        variant="h6" color="inherit" noWrap>
                        <strong>RUPE</strong>
                    </Typography>  
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>   
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.sectionDesktop}>
                      <MenuItem>
                          <Typography component={Link} to='/eatery' style={{textDecoration:'none'}} color="inherit">
                              Show Eateries
                          </Typography>
                      </MenuItem>  
                      <MenuItem>
                          <Button component={Link} to='/add-eatery' style={{backgroundColor:orange[500], color:grey[50]}}>Add Eatery</Button>
                      </MenuItem>
                    </div>
                     
                    <div className={classes.sectionMobile}>
                      <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                      >
                        <MoreIcon />
                      </IconButton>
                    </div>
                </Toolbar>        
            </Appbar>
            {renderMobileMenu}
        </div>

    )
}
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function Navbar({content}) {
    const location = useLocation();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                            boxShadow: 'none',}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Interactive Data Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
                }}
            >
            <Toolbar />
            <Box sx={{ overflow: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>

                <ListItem key={1} disablePadding>
                <ListItemButton component={Link} to={"/"} selected={"/" === location.pathname} sx={{color: "white",}}>
                    <ListItemIcon>
                            <AutoGraphIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard 1"} />
                </ListItemButton>
                </ListItem>

                <ListItem key={2} disablePadding>
                <ListItemButton component={Link} to={"/dashboard2"} selected={"/dashboard2" === location.pathname} sx={{ color: "white"}}>
                    <ListItemIcon>
                            <AutoGraphIcon />
                    </ListItemIcon>
                    <ListItemText primary={"About"} />
                </ListItemButton>
                </ListItem>

            </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <Toolbar />
                {content}
        </Box>
    </Box>
  );
}


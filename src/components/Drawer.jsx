import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
const DrawerComp = () => {
	const [ openDrawer, setOpenDrawer ] = useState(false);

	return (
		<React.Fragment>
			<Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<List>
					<ListItemButton >
						<ListItemIcon>
							<ListItemText><Link className="link-header" to='/'>Macotas</Link></ListItemText>
						</ListItemIcon>
					</ListItemButton>
					<ListItemButton >
						<ListItemIcon>
							<ListItemText><Link className="link-header" to='#'>Sobre Nosotros</Link></ListItemText>
						</ListItemIcon>
					</ListItemButton>
					<ListItemButton >
						<ListItemIcon>
							<ListItemText><Link className="link-header" to='#'>Contacto</Link></ListItemText>
						</ListItemIcon>
					</ListItemButton>
				</List>
			</Drawer>
			<IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon color="white" />
			</IconButton>
		</React.Fragment>
	);
};

export default DrawerComp;

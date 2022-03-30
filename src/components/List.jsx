import React, { useState } from 'react';
import Title from './Title';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function List() {
	const mascotasLocal = JSON.parse(localStorage.getItem('MASCOTAS'));

	const [ opciones, setOpciones ] = useState(mascotasLocal);
	console.log(opciones);

	// console.log(JSON.parse(localStorage.getItem('MASCOTAS')));
	return (
		<Box sx={{ flexGrow: 1, marginLeft: 20, marginRight: 20, marginBottom: 8 }}>
			<Title title="Estos son tus seleccionados" />
			<Grid container rowSpacing={3} columnSpacing={3} gap={3} columns={3} className="caja-carta">
				{opciones.map((e) => {
					return (
						<Card
							className={`item-con item-${e.estado}`}
							key={e.id_mascota}
							sx={{ minWidth: 385, maxWidth: 345, minHeight: 385, maxHeight: 385 }}
						>
							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: '#29b9a1' }} aria-label="recipe">
										V
									</Avatar>
								}
								title={e.nombre}
								subheader={`En ${e.estado}`}
							/>
							<CardMedia component="img" height="194" image={e.img_url} alt={e.nombre} />
							<CardContent>
								<Typography variant="body2" color="text.primary">
									Raza: {e.raza}
								</Typography>
								<Typography variant="body2" color="text.primary">
									Especie: {e.especie}
								</Typography>
							</CardContent>
						</Card>
					);
				})}
			</Grid>
		</Box>
	);
}

export default List;

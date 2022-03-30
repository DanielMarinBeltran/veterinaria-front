import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';
import Title from './Title';
import { consultarAction } from '../redux/actions/consultaAction';
import { useDispatch, useSelector } from 'react-redux';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Avatar,
	Modal,
	Box,
	TextField
} from '@mui/material/';
import Buttons from './Buttons';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #29b9a1',
	borderRadius: '10px',
	boxShadow: 24,
	p: 4
};

const styleBox = {
	marginTop: '10px',
	display: 'flex',
	flexDirection: 'column'
};

function Main() {
	//Inicializa el Dispatch

	let dispatch = useDispatch();

	// Redux

	const { result } = useSelector((state) => state.info);

	//Consulta

	useEffect(() => {
		dispatch(consultarAction());
	}, []);

	let allCategories = [ 'All', 'adopcion', 'encontrada', 'perdida' ];
	// State
	const [ buttons, setButtons ] = useState(allCategories);
	const [ filtro, setFiltro ] = useState(result);
	const [ nombres, setNombres ] = useState('');
	const [ ciudad, setCiudad ] = useState('');
	const [ telefono, setTelefono ] = useState('');
	const [ observacion, setObservacion ] = useState('');
	const [ idMascota, setIdMascota ] = useState('');

	const id_mascota = idMascota;

	// Modal

	const [ open, setOpen ] = useState(false);

	const handleOpen = (e) => {
		setOpen(true)
		setIdMascota(e);
	};
	const handleClose = () => setOpen(false);

	// Filter Function
	const filter = (button) => {
		if (button === 'All') {
			setFiltro(result);
			return;
		}
		const filteredData = result.filter((item) => item.estado === button);
		setFiltro(filteredData);
	};

	// get id Function

	// const getPetID = (e) => {
	// 	const id = e.id_mascota;
	// 	console.log(id);
	// }

	// Submit Function

	const handleSubmit = (e) => {
		e.preventDefault();
		const informacion = { nombres, telefono, ciudad, observacion, id_mascota };
		const createInformation = async () => {
			try{
				let res = await axios.post('http://localhost:3050/crearAdopcion', informacion);
			}catch(e){
				console.log("OCURRIO UN ERROR");
			}
		};
		createInformation()
		e.target.reset();
	};

	return (
		<div className="container-central">
			<Title title="Encuentra tu Futura Mascota" />
			<Buttons buttons={buttons} filter={filter} />
			<div className="main">
				{filtro.map((e) => {
					return (
						<Card
							className={`item-con item-${e.estado}`}
							key={e.id_mascota}
							sx={{ maxWidth: 345, minHeight: 385, maxHeight: 385 }}
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
							{e.estado === 'adopcion' ? (
								<Button
									onClick={() => handleOpen(e.id_mascota)}
									variant="contained"
									color="success"
									sx={{ width:'95%', marginLeft: 1, marginBottom: 1 }}
								>
									Enviar Datos
								</Button>
							) : null}
						</Card>
					);
				})}
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<form onSubmit={handleSubmit}>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Por favor ingresa tus datos a continuacion
						</Typography>
						<Box sx={styleBox}>
							<Typography sx={{ marginBottom: '10px' }} variant="p">
								Nombres
							</Typography>
							<TextField
								required
								sx={{ marginBottom: '10px' }}
								id="outlined-basic"
								label="Nombres"
								variant="outlined"
								value={nombres}
								onChange={(e) => setNombres(e.target.value)}
							/>
						</Box>
						<Box sx={styleBox}>
							<Typography sx={{ marginBottom: '10px' }} variant="p">
								Ciudad
							</Typography>
							<TextField
								required
								sx={{ marginBottom: '10px' }}
								id="outlined-basic"
								label="Ciudad"
								variant="outlined"
								value={ciudad}
								onChange={(e) => setCiudad(e.target.value)}
							/>
						</Box>
						<Box sx={styleBox}>
							<Typography sx={{ marginBottom: '10px' }} variant="p">
								Numero Celular
							</Typography>
							<TextField
								type="number"
								required
								sx={{ marginBottom: '10px' }}
								id="outlined-basic"
								label="Telefono"
								variant="outlined"
								value={telefono}
								onChange={(e) => setTelefono(e.target.value)}
							/>
							<Typography sx={{ marginBottom: '10px' }} variant="p">
								Observaciones
							</Typography>
							<TextField
								id="outlined-multiline-static"
								label="Observaciones"
								multiline
								rows={4}
								value={observacion}
								onChange={(e) => setObservacion(e.target.value)}
							/>
						</Box>
						<Button type="submit" sx={{ marginTop: '20px' }}>
							Siguiente
						</Button>
					</Box>
				</form>
			</Modal>
		</div>
	);
}

export default Main;

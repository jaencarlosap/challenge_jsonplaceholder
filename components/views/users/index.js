import { useEffect, useState } from 'react'
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap'

import { Api } from './query'
import Modal from '../../Modal'

const Index = () => {
	const [data, setData] = useState([]);
	const [modal, setModal] = useState(false);
	const [infoModal, setinfoModal] = useState();

	useEffect(() => {
		Api('users').then(res => {
			if (res.length > 0) setData(res);
		});
	}, []);

	const handleModal = info => {
		setModal(!modal);
		setinfoModal(info);
	};

	const handleDelete = () => {
		if (!infoModal) return null;

		Api('users/' + infoModal.id, 'DELETE').then(res => {
			let newData = data.filter(elem => elem.id != infoModal.id);
			setData(newData);
			handleModal();
		});
	};

	const handleUpdate = () => {
		if (!infoModal) return null;

		Api('users/' + infoModal.id, 'PUT', {
			id: infoModal.id,
			name: 'pedro',
		}).then(res => {
			let newData = data.map(elem => {
				if (elem.id === infoModal.id) {
					elem.name = 'Pedro';
				}
				return elem;
			});

			setData(newData);
			handleModal();
		});
	};

	const handleDuplicate = () => {
		if (!infoModal) return null;
		Api('users', 'POST', infoModal).then(res => {
			let newData = [...data, { ...infoModal, id: data.length + 1 }];
			setData(newData);
			handleModal();
		});
	};

	return (
		<Container>
			<Row>
				{
					data?.map(elem => (
						<Col lg={4} style={{ padding: 5 }} key={`col_${elem.id}`}>
							<Card>
								<CardBody>
									<CardTitle>{`Nombre: ${elem.name}`}</CardTitle>
									<CardSubtitle>{`Email: ${elem.email}`}</CardSubtitle>
									<Button onClick={() => handleModal(elem)}>Ver Más</Button>
								</CardBody>
							</Card>
						</Col>
					))
				}
			</Row>
			<Modal
				title="Información extra"
				modal={modal}
				data={infoModal}
				toggle={handleModal}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
				handleDuplicate={handleDuplicate}
			/>
		</Container>
	);
};

export default Index;

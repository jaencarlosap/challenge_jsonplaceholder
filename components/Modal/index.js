import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = props => {
  const {
    modal,
    toggle,
    data,
    title,
    handleDelete,
    handleUpdate,
    handleDuplicate,
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <div>
            <h4>Información personal :</h4>
            <p>Nombre: {data?.name}</p>
            <p>Alias: {data?.username}</p>
            <p>Celular: {data?.phone}</p>
            <p>Email: {data?.email}</p>
            <p>Web: {data?.website}</p>
          </div>
          <div>
            <h4>Direccion :</h4>
            <p>Ciudad: {data?.address?.city}</p>
            <p>Calle: {data?.address?.street}</p>
            <p>Codigo Postal: {data?.address?.zipcode}</p>
          </div>
          <div>
            <h4>Empresa :</h4>
            <p>nombre: {data?.company?.name}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          {handleDelete && (
            <Button color="danger" onClick={handleDelete}>
              Eliminar
            </Button>
          )}
          {handleUpdate && (
            <Button color="info" onClick={handleUpdate}>
              Editar nombre por pedro
            </Button>
          )}
          {handleDuplicate && (
            <Button color="success" onClick={handleDuplicate}>
              Duplicar registro
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;

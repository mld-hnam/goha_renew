import { Modal } from "antd";
import React from "react";
import useDeleteFlight from "../services/useDeleteFlight";
import { useInvalidateFlight } from "../services/useGetFlights";

const DeleteFlightModal = ({ flightId, code, closeModal, ...restProps }) => {
  const invalidateFlight = useInvalidateFlight();
  const { mutate: deleteFlight } = useDeleteFlight();

  const handleDelete = () => {
    deleteFlight(
      { id: flightId },
      {
        onSuccess: async () => {
          await invalidateFlight();
          await closeModal();
        },
      }
    );
  };

  return (
    <Modal
      {...restProps}
      title={`Are you sure delete`}
      onOk={handleDelete}
      onCancel={closeModal}
    >
      <p>
        Code: <b>{code}</b>
      </p>
    </Modal>
  );
};

export default DeleteFlightModal;

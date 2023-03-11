import { Modal } from "antd";
import React from "react";
import useDeleteCustomer from "../services/useDeleteCustomer";
import { useInvalidateCustomer } from "../services/useGetCustomers";

const DeleteCustomerModal = ({
  customerId,
  name,
  closeModal,
  ...restProps
}) => {
  const invalidateCustomer = useInvalidateCustomer();
  const { mutate: deleteCustomer } = useDeleteCustomer();

  const handleDelete = () => {
    deleteCustomer(
      { id: customerId },
      {
        onSuccess: async () => {
          await invalidateCustomer();
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
        Name: <b>{name}</b>
      </p>
    </Modal>
  );
};

export default DeleteCustomerModal;

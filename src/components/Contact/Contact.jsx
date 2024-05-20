import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import DeleteModalWindow from '../DeleteModalWindow/DeleteModalWindow';
import UpdateModalWindow from '../UpdateModalWindow/UpdateModalWindow';
import Button from '@mui/material/Button';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast.success('Contact deleted successfully!'))
      .catch(() => toast.error('An error occurred, please check...'));
    setOpenDeleteModal(false);
  };

  const handleUpdate = (updatedName, updatedPhoneNumber) => {
    const updatedData = {
      name: updatedName !== '' ? updatedName : contact.name,
      number: updatedPhoneNumber !== '' ? updatedPhoneNumber : contact.number,
    };

    dispatch(
      updateContact({
        contactId: contact.id,
        updateContactData: updatedData,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Contact changed successfully!');
        setOpenUpdateModal(false);
      })
      .catch(() => toast.error('An error occurred, please check...'));
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser className="icon" /> {contact.name}
        </p>
        <p className={css.number}>
          <FaPhone className="icon" /> {contact.number}
        </p>
      </div>
      <div className={css.buttons}>
        <Button
          variant="contained"
          className={css.button}
          type="button"
          onClick={() => {
            setOpenUpdateModal(true);
          }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          className={css.button}
          type="button"
          onClick={() => {
            setOpenDeleteModal(true);
          }}
        >
          Delete
        </Button>
      </div>

      <DeleteModalWindow
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        handleDelete={handleDelete}
      />

      <UpdateModalWindow
        open={openUpdateModal}
        handleClose={() => setOpenUpdateModal(false)}
        handleUpdate={() => {
          handleUpdate(name, phoneNumber);
        }}
        phoneNumber={phoneNumber}
        name={name}
        setPhoneNumber={setPhoneNumber}
        setName={setName}
      />
    </div>
  );
}

import { useState } from 'react';
import { FormWrapper } from '../formWrapper/FormWrapper';
import NameLabel from 'components/labels/NameLabel';
import PhoneLabel from 'components/labels/PhoneLabel';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from 'redux/contacts/contactsOperations';
import toast, { Toaster } from 'react-hot-toast';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state.contacts.contacts);

  const navigate = useNavigate();
  const location = useLocation();

  let authSelector = useSelector(state => state.auth.isLoaded);

  const onSubmitForm = result => {
    const contactName = result.name;
    return data.find(
      result => result.name.toLowerCase() === contactName.toLowerCase()
    )
      ? null
      : dispatch(postContact(result));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = createContact(name, number);
    onSubmitForm(newContact)
      ? navigate((location.pathname = '/'))
      : toast.error(`${name} is already in contacts`);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const createContact = (name, number) => {
    return { name, number };
  };

  return (
    <>
      {authSelector && (
        <FormWrapper onSubmit={handleSubmit} submitButton="Add contact">
          <NameLabel value={name} onchange={evt => setName(evt.target.value)} />

          <PhoneLabel
            value={number}
            onchange={evt => setNumber(evt.target.value)}
          />

          <Toaster />
        </FormWrapper>
      )}
    </>
  );
};

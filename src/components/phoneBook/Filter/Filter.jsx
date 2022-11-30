import { FilterSection, Label, Input } from './Filter.modul';
import { useSelector, useDispatch } from 'react-redux';


import { filterContacts } from '../../../redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector( getFilter);
  const dispatch = useDispatch();

  function filterName(event) {
    dispatch(filterContacts(event.currentTarget.value));
  }

  return (
    <FilterSection>
      <Label>Filter</Label>
      <Input type="text" value={filter} onChange={filterName} />
    </FilterSection>
  );
};
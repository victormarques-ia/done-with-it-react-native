import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

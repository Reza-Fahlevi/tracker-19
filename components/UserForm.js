import React, { PureComponent } from 'react' 
import MainLayout from '../layout/main';

export function FormComponent() {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [value, setValue] = React.useState('tp3');
}

const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked }),
  setValue(event.target.value);
};

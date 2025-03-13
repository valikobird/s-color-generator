import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Values from 'values.js';
import ColorList from './components/ColorList';
import Form from './components/Form';

const App = () => {
  const defaultColor = '#4682b4';
  const [colors, setColors] = useState(new Values(defaultColor).all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} defaultColor={defaultColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;

import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Failed to copy to clipboard');
      }
    } else {
      toast.error('Clipboard access is not available');
    }
  };

  return (
    <article
      className={index > 10 ? 'color colorLight' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percentValue'>{weight}%</p>
      <p className='colorValue'>#{hex}</p>
    </article>
  );
};

export default SingleColor;

import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ColorPalettesContext } from '../../context/ColorPalettesContext';
import './PaletteDisplay.css';
import TagDisplay from './TagDisplay';

const PaletteDisplay = () => {
  const { id } = useParams();
  const { colorPalettes } = useContext(ColorPalettesContext);
  const [palette] = colorPalettes.filter(
    (palette) => palette.id === Number(id)
  );

  return (
    <div className='palette-display-container'>
      <div className='palette-display-card'>
        <h1 className='palette-display-name'>{palette.name}</h1>
        {palette.colors.map((color, index) => {
          return (
            <div
              key={color}
              className={`color-d c${index}-d`}
              style={{ backgroundColor: color }}
            >
              <div className='hex-code-d'>{color}</div>
            </div>
          );
        })}
        <div className='tag-d-container'>
        {
          palette.tags.map((tag, index) => 
            <TagDisplay key={index} tag={tag} />
          )
        }
        </div>
      </div>
      <Link className='btn-back' to='/'>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default PaletteDisplay;

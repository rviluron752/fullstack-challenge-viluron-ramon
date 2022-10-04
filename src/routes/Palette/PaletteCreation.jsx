import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getTags } from '../../service';
import { ColorPalettesContext } from '../../context/ColorPalettesContext';
import './PaletteCreation.css';

const PaletteCreation = () => {
  const [tags, setTags] = useState([]);
  const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext)
  const navigate = useNavigate()

  useEffect(() => {
    getTags()
      .then((data) => setTags(data))
      .catch((err) => console.log(err));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      color1: '#ffffff',
      color2: '#ff6161',
      color3: '#74e797',
      color4: '#769cf4',
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    const paletteNew = {
      id: colorPalettes.length + 1,
      name: data.paletteName,
      colors: [data.color1, data.color2, data.color3, data.color4],
      liked: false,
      tags: [data.tag]
    }

    setColorPalettes([...colorPalettes, paletteNew])
    navigate('/')
  }

  return (
    <div className='palette-new-container'>
      <span>Crea una nueva paleta</span>
      <form className='palette-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='Nombre de la paleta'
          {...register('paletteName', {
            required: 'Debe ingresar un nombre',
          })}
        />
        <p>{errors.paletteName?.message}</p>
        <input
          type='color'
          {...register('color1', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color1?.message}</p>
        <input
          type='color'
          {...register('color2', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color2?.message}</p>
        <input
          type='color'
          {...register('color3', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color3?.message}</p>
        <input
          type='color'
          {...register('color4', {
            required: 'Debe seleccionar un color',
          })}
        />
        <p>{errors.color4?.message}</p>
        <select
          className='input-palette-name-form'
          {...register('tag', {
            required: 'Debe seleccionar un tag',
          })}
        >
          <option value=''></option>
          {
            tags.map(tag => 
              <option key={tag.id} value={tag.value}>{tag.value}</option>
            )
          }
        </select>
        <p>{errors.tag?.message}</p>
        <button className='btn-form' type='submit'>
          Crear Paleta
        </button>
      </form>
    </div>
  );
};

export default PaletteCreation;

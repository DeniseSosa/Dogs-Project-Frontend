// Hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// funciones
import validation from "./validations";
import {
  postDog,
  getTemperaments,
  tempAllNames,
} from "../../redux/actions/actions";
//Style
import style from './Form.module.css'

const Form = () => {
  const [create, setCreate] = useState({
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    life_span: "",
    temperament: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  //
  const [temp, setTemp] = useState([]);
  // Estado global para traer los temperamentos
  const { allTempCopy } = useSelector((state) => state);
  const dispatch = useDispatch();

  //Montahe de temperamentos para el selector
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  // A medida que escribo o selecciono se guarde en la propiedad del estado local correpondiente
  const onChange = (event) => {
    setCreate({
      ...create,
      [event.target.name]: event.target.value,
    });
    setErrors(validation(create));
  };
  
  // despacho la action POSTDOG y le digo que el weight y el height se guarden igual q en la api
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postDog({
        ...create,
        height: `${create.heightMin} - ${create.heightMax}`,
        weight: `${create.weightMin} - ${create.weightMax}`,
      })
      );
  };
  
  // creo el estado local para guardar en la etiqueta p todos los temperamentos
  const tempSelected = (event) => {
    dispatch(tempAllNames(event.target.value));
    const opciones = event.target.options;
    const seleccionadas = [];
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected) {
        seleccionadas.push(opciones[i].value);
      }
    }
    setTemp([...temp, seleccionadas]);
  };
 // console.log(tempSelected);              

  return (
    <div className={style.divContainer}>

    <form onSubmit={handleSubmit} className={style.formContainer}>
      <div>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      </div>

<div className={style.Name}>
      <h2>¡Add here your Doggy Soulmate!</h2>
      <label htmlFor="name">Breed Name:</label>
      <input type="text" name="name" value={create.name} onChange={onChange} />
      {errors.name && <p>{errors.name}</p>}
</div>

<div className={style.heightMin}>
      <label htmlFor="heightMin">Height Min:</label>
      <input
        type="text"
        name="heightMin"
        value={create.heightMin}
        onChange={onChange}
      />
      {errors.heightMin && <p>{errors.heightMin}</p>}
</div>

<div className={style.heightMax}>
      <label htmlFor="heightMax">Height Max:</label>
      <input
        type="text"
        name="heightMax"
        value={create.heightMax}
        onChange={onChange}
      />
      {errors.heightMax && <p>{errors.heightMax}</p>}
</div>

<div className={style.weightMin}>
      <label htmlFor="weightMin">Weight Min:</label>
      <input
        type="text"
        name="weightMin"
        value={create.weightMin}
        onChange={onChange}
        />
      {errors.weightMin && <p>{errors.weightMin}</p>}
</div>

<div className={style.weightMax}>
      <label htmlFor="weightMax">Weight Max:</label>
      <input
        type="text"
        name="weightMax"
        value={create.weightMax}
        onChange={onChange}
        />
      {errors.weightMax && <p>{errors.weightMax}</p>}
</div>

<div className={style.lifeSpan}>
      <label htmlFor="life_span">Life Span:</label>
      <input
        type="radio"
        value={create.life_span}
        name="life_span"
        onChange={onChange}
      />
      1-5
      <input
        type="radio"
        value={create.life_span}
        name="life_span"
        onChange={onChange}
        />
      5-10
      <input
        type="radio"
        value={create.life_span}
        name="life_span"
        onChange={onChange}
      />
      10-15
      <input
        type="radio"
        value={create.life_span}
        name="life_span"
        onChange={onChange}
      />
      +15
      {errors.life_span && <p>{errors.life_span}</p>}
</div>

<div className={style.temperaments}>
<label htmlFor="temperament">
        Temperaments:
        <section type="text" name="text" onChange={onChange}>
          <select onChange={tempSelected} multiple>
            <option> Temperaments:</option>
            {allTempCopy.sort().map((temp, index) => {
              return (
                <option value={temp.name} key={index}>  
                  {temp.name}
                </option>
              );
            })}
          </select>
          <h4>The selected temperaments are:</h4>
          {temp.map((tem, index) => (
            <p key={index}>{tem.name}</p>                     
          ))}
        </section>
      </label>
      {errors.temp && <p>{errors.temp}</p>}
      <label>Didn't find the temperaments? Add it here!!</label>
      <input
        type="text"
        name="temperament"
        value={create.temperament}
        onChange={onChange}
      />
</div>
<div className={style.image}>
      <label htmlFor="image">Imagen</label>
      <input type="file" accept="image/*"></input>
      <img src={create.image} alt={create.name} />
      {errors.image && <p>{errors.image}</p>}
</div>

      <button
        type="submit"
        // disabled={
        //   errors.name ||
        //   errors.heightMin ||
        //   errors.heightMax ||
        //   errors.weightMin ||
        //   errors.weightMax ||
        //   errors.temperament ||
        //   errors.image ||
        //   errors.life_span
        // }
        >
        Done!
      </button>
    </form>
  </div>
  );
};
export default Form;


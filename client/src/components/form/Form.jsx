// Hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// funciones
import validation from "./validations";
import { postDog, getTemperaments } from "../../redux/actions/actions";
//Style
import style from "./Form.module.css";

const Form = () => {
  // creo un estado local para poder llenarlo con lo que el usuario envia por body al back
  const [create, setCreate] = useState({
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    life_span: "",
    temperament: [],
    image: "",
  });
  
  console.log(create);
  // un estado de error para poder validar en tiempo real
  const [errors, setErrors] = useState({});
  // Estado global para traer los temperamentos
  const { allTempCopy } = useSelector((state) => state);
  const dispatch = useDispatch();

  //Montaje de temperamentos para el selector
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  // A medida que escribo o selecciono se guarde en la propiedad del estado local correpondiente
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "temperament") {
      // Si el nombre es "temperament", actualiza con un array de opciones seleccionadas
      setCreate({
        ...create,
        [name]: Array.from(event.target.selectedOptions, (option) => option.value),
      });
    } else {
      // De lo contrario, actualiza normalmente
      setCreate({
        ...create,
        [name]: value,
      });
    }
    setErrors(validation(create));
  };
  // despacho la action POSTDOG y le digo que el weight y el height se guarden igual q en la api
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postDog({
        ...create,
        height: `${create.heightMin} - ${create.heightMax}`,
        weight: `${create.weightMin} - ${create.weightMax}`,  // le pido que despache la action con este formato de height y weight
      })
    );
  };

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
          <input
            type="text"
            name="name"
            value={create.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className={style.heightMin}>
          <label htmlFor="heightMin">Height Min:</label>
          <input
            type="text"
            name="heightMin"
            value={create.heightMin}
            onChange={handleChange}
          />
          {errors.heightMin && <p>{errors.heightMin}</p>}
        </div>

        <div className={style.heightMax}>
          <label htmlFor="heightMax">Height Max:</label>
          <input
            type="text"
            name="heightMax"
            value={create.heightMax}
            onChange={handleChange}
          />
          {errors.heightMax && <p>{errors.heightMax}</p>}
        </div>

        <div className={style.weightMin}>
          <label htmlFor="weightMin">Weight Min:</label>
          <input
            type="text"
            name="weightMin"
            value={create.weightMin}
            onChange={handleChange}
          />
          {errors.weightMin && <p>{errors.weightMin}</p>}
        </div>

        <div className={style.weightMax}>
          <label htmlFor="weightMax">Weight Max:</label>
          <input
            type="text"
            name="weightMax"
            value={create.weightMax}
            onChange={handleChange}
          />
          {errors.weightMax && <p>{errors.weightMax}</p>}
        </div>

        <div className={style.lifeSpan}>
          <label htmlFor="life_span">Life Span:</label>
          1-5
          <input
            type="radio"
            value="1-5"
            name="life_span"
            onChange={handleChange}
          />
          5-10
          <input
            type="radio"
            value="5-10"
            name="life_span"
            onChange={handleChange}
          />
          10-15
          <input
            type="radio"
            value="10-15"
            name="life_span"
            onChange={handleChange}
          />
          +15
          <input
            type="radio"
            value="+15"
            name="life_span"
            onChange={handleChange}
          />
          {errors.life_span && <p>{errors.life_span}</p>}
        </div>

        <div className={style.temperaments}>
          <label htmlFor="temperament">
            Temperament:
            <select
              multiple
              type="checkbox"
              name="temperament"
              onChange={handleChange}
              value={create.temperament}
            >
              {allTempCopy.map((temp, index) => {
                return (
                  <option value={temp.name} key={index} name={temp.name}>
                    {" "}
                    {temp.name}
                  </option>
                );
              })}
            </select>
          </label>
          {errors.temp && <p>{errors.temp}</p>}
          <label htmlFor="temperament">
            Didn't find the temperaments? Add it here!!
          </label>
          <input
            type="text"
            name="temperament"
            value={create.temperament}
            onChange={handleChange}
          />
        </div>
        <div className={style.image}>
          <label htmlFor="image">Imagen</label>
          <input
            type="url"
            name="image"
            accept="url/*"
            value={create.image}
            onChange={handleChange}
            placeholder="insert URL please"
          />
          <img src={create.image} alt={create.name} />
          {errors.image && <p>{errors.image}</p>}
        </div>

        <button
          type="submit"
          disabled={
            errors.name ||
            errors.heightMin ||
            errors.heightMax ||
            errors.weightMin ||
            errors.weightMax ||
            errors.temperament ||
            errors.life_span
          }
        >
          Done!
        </button>
      </form>
    </div>
  );
};
export default Form;



import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import validation from "./validations";
import {
  postDog,
  getTemperaments,
  tempAllNames,
} from "../../redux/actions/actions";

const Form = () => {
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
  const [errors, setErrors] = useState({});
  const [temp, setTemp] = useState([]);
  const { allTempCopy } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const onChange = (event) => {
    if (event.target.name === "temperament") {
      return setCreate({
        ...create,
        temperament: [...create.temperament, event.target.value],
      });
    }
    setCreate({
      ...create,
      [event.target.name]: event.target.value,
    });
    setErrors(validation(create));
  };

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

  return (
    <form onSubmit={handleSubmit}>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      <h2>¡Add here your Doggy Soulmate!</h2>
      <label htmlFor="name">Breed Name:</label>
      <input type="text" name="name" value={create.name} onChange={onChange} />
      {errors.name && <p>{errors.name}</p>}
      <label htmlFor="heightMin">Height Min:</label>
      <input
        type="text"
        name="heightMin"
        value={create.heightMin}
        onChange={onChange}
      />
      {errors.heightMin && <p>{errors.heightMin}</p>}
      <label htmlFor="heightMax">Height Max:</label>
      <input
        type="text"
        name="heightMax"
        value={create.heightMax}
        onChange={onChange}
      />
      {errors.heightMax && <p>{errors.heightMax}</p>}
      <label htmlFor="weightMin">Weight Min:</label>
      <input
        type="text"
        name="weightMin"
        value={create.weightMin}
        onChange={onChange}
      />
      {errors.weightMin && <p>{errors.weightMin}</p>}
      <label htmlFor="weightMax">Weight Max:</label>
      <input
        type="text"
        name="weightMax"
        value={create.weightMax}
        onChange={onChange}
      />
      {errors.weightMax && <p>{errors.weightMax}</p>}
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
      <label htmlFor="temperament">
        Temperaments:
        <section type="text" name="text" onChange={onChange}>
          <select onChange={tempSelected} multiple>
            <option> Temperaments:</option>
            {allTempCopy.sort().map((temp, index) => {
              return (
                <option value={temp} key={index}>
                  {temp}
                </option>
              );
            })}
          </select>
          <h4>The selected temperaments are:</h4>
          {temp.map((tem, index) => (
            <p key={index}>{tem}</p>
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
      <label htmlFor="image">Imagen</label>
      <input type="file" accept="image/*"></input>
      <img src={create.image} alt={create.name} />
      {errors.image && <p>{errors.image}</p>}
      <button
        type="submit"
        disabled={
          errors.name ||
          errors.heightMin ||
          errors.heightMax ||
          errors.weightMin ||
          errors.weightMax ||
          errors.temperament ||
          errors.image ||
          errors.life_span
        }
      >
        Done!
      </button>
    </form>
  );
};
export default Form;

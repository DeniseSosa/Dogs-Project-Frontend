const { Dog, Temperaments } = require('../db');

const postDogController = async (name, image, height, weight, life_span, temperaments) => {
    console.log(name, image, height, weight, life_span, temperaments);
  const [dogCreated, created] = await Dog.findOrCreate({  // el elemento a crear u objeto y un boolean  true si es creado
      where: { name, weight, height, image, life_span },
      include: [{ model: Temperaments, as: 'temperament' }], // aca lo relaciono
    });

    if (created) {  // utilizo el promise all  que devuelve una promesa  que termina ok cuando todas las promesas a iterar concluyeron
      const tempArray = await Promise.all(
        temperaments.map(async (tempName) => {
          const [tempArr, createdTemp] = await Temperaments.findOrCreate({
            where: { name: tempName },
          });

          if (createdTemp) {
          }
          return dogCreated.addTemperament(tempArr); // metodo add[model] e como el set[model] pero crea una nueva asociacion
        })
      );
      // lo mismo que arriba pero con las relaciones
      await Promise.all(tempArray);

      // el dog con sus temperaments
      const dogWithTemperaments = await Dog.findByPk(dogCreated.id, {
        include: [{ model: Temperaments, as: 'temperament' }],
      });
console.log(dogWithTemperaments);
      return dogWithTemperaments;
    }
console.log(dogCreated);
    return dogCreated;

};

module.exports = {
  postDogController,
};

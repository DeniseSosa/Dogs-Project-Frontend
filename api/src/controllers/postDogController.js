const { Dog, Temperaments } = require('../db');

const postDogController = async (name, image, height, weight, life_span, temperaments) => {
    const [dogCreated, created] = await Dog.findOrCreate({  // el elemento a crear u objeto y un boolean  true si es creado
      where: { name, weight, height, image, life_span },
      include: [{ model: Temperaments, as: 'temperament' }], // aca lo relaciono
    });

    if (created) {  // utilizo el promise all  que devuelve una promesa  que termina ok cuando todas las promesas a iterar concluyeron
      const tempAssociations = await Promise.all(
        temperaments.map(async (tempName) => {
          const [tempAsociate, createdT] = await Temperaments.findOrCreate({
            where: { name: tempName },
          });

          if (createdT) {
            return dogCreated.addTemperament(tempAsociate); // metodo add[model] e como el set[model] pero crea una nueva asociacion
          }
        })
      );
      // lo mismo que arriba pero con las relaciones
      await Promise.all(tempAssociations);

      // el dog con sus temperaments
      const dogWithTemperaments = await Dog.findByPk(dogCreated.id, {
        include: [{ model: Temperaments, as: 'temperament' }],
      });

      return dogWithTemperaments;
    }

    return dogCreated;

};

module.exports = {
  postDogController,
};
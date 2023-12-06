const { Dog, Temperaments } = require('../db');

const postDogController = async (name, image, height, weight, life_span, temperaments) => {
    const [dogCreated, created] = await Dog.findOrCreate({
      where: { name, weight, height, image, life_span },
      include: [{ model: Temperaments, as: 'temperament' }],
    });

    if (created) {
      const tempAssociations = await Promise.all(
        temperaments.map(async (tempName) => {
          const [tempAsociate, createdT] = await Temperaments.findOrCreate({
            where: { name: tempName },
          });

          if (createdT) {
            return dogCreated.addTemperament(tempAsociate);
          }
        })
      );
      // Esperar a que todas las asociaciones se completen antes de continuar
      await Promise.all(tempAssociations);

      // Recargar el perro con los temperamentos asociados
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
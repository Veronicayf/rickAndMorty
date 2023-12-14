const { Favorite } = require('../DB_connection')

module.exports = async (req, res) => {

    try {
        const { name, origin, status, image, species, gender } = req.body;

        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).json('Faltan datos')
        } 
            await Favorite.findOrCreate({
                where: {name,origin,status, image,species,gender}});

            const allFavorites = await Favorite.findAll()
            return res.status(200).json(allFavorites)
      
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};


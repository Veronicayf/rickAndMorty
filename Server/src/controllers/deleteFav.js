const { Favorite } = require('../DB_connection')


module.exports = async (req, res) => {
    try {
        const { id } = req.params; 

        await Favorite.destroy({where: {id}}) // busca y destruye

        const allFavorites = await Favorite.findAll();
        res.status(200).json(allFavorites)

        
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};


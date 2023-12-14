const axios = require('axios');

const getCharById = async (req, res) => {
    
    
    try {
        const { id } = req.params;
        const response = await axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-veronicayf`)
        const { name, gender, origin, status, image, species } = response.data
        if(response.data){
            let character = {
                id,
                name,
                species,
                gender,
                origin,
                status,
                image
            };
            return res.status(200).json(character)
        } else {
            return res.status(404).send('Not found')
        }   
        
    } catch (error){
        res.status(500).json({error: error.message})
    }
};

module.exports = {
    getCharById
}
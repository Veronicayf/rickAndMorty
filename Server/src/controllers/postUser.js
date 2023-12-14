const { User } = require('../DB_connection') //permite crear el usuario

//es asincrono por que las consultas son promesas

module.exports = async (req, res) => {

    try {
        const { email, password } = req.body
    
        if (!email || !password) {return res.status(400).json({ message: 'Faltan datos' })}

        const user = await User.findOrCreate({where: {email: email, password:password}}) 
        return res.json(user)

    }catch (error) {
                res.status(500).json(error.message)
            }
}

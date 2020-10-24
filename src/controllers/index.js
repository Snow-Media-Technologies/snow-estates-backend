const configs = require('../config/index');

const properties = {
    addProperty: async (req, res) => {

        const { body } = req

        try {

            const getCollection = configs.__firestore.collection('propertiess')

            const createDoc = await getCollection.add(body)
            
            if(!createDoc.id) {
                return res.status(400).send({
                    status: 400,
                    message: 'The data is not saved'
                }) 
            }

            const saveAlgolia = await configs.__algoliaSearch.saveObject(body, {autoGenerateObjectIDIfNotExist: true})
            
            return res.status(201).send({
                status: 201,
                message: 'The property was saved to both firestore and algolia',
                savedAlg: saveAlgolia
            })
        } catch(error) {
            console.log('llllllll---', error)
            return res.status(500).send({
                status: 500,
                message: 'Please try again'
            })
        }
    }
}

module.exports = properties;

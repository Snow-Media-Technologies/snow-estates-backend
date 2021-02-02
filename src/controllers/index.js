const configs = require("../config/index");
const uuid = require("uuid");

const properties = {
  addProperty: async (req, res) => {
    const { body } = req;
    body.uuid = uuid.v4();

    try {
      console.log("hahahahhah", body);
      const getCollection = configs.__firestore.collection("properties");

      const createDoc = await getCollection.add(body);

      if (!createDoc.id) {
        return res.status(400).send({
          status: 400,
          message: "The data is not saved",
        });
      }

      const algoliaObj = {
        title: body.title,
        price: body.price,
        uuid: body.uuid,
        province: body.province,
        district: body.district,
        sector: body.sector,
        village: body.village,
        coordinates: body.coordinates,
        property_details: body.property_details,
        images: body.images,
        property_info: body.property_info,
        owner: body.owner,
        blocker: body.blocker,
      };

      const saveAlgolia = await configs.__algoliaSearch.saveObject(algoliaObj, {
        autoGenerateObjectIDIfNotExist: true,
      });

      return res.status(201).send({
        status: 201,
        message: "The property was saved to both firestore and algolia",
        savedAlg: saveAlgolia,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: "Please try again",
      });
    }
  },
};

module.exports = properties;

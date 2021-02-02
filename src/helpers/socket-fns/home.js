const configs = require("../../config");

module.exports = function receiveMessage(socket) {
  socket.on("home_event", async function message(data) {
    const getCollection = await configs.__firestore
      .collection("properties")
      .get();

    let properties = [];
    getCollection.forEach((doc) => {
      properties.push(doc.id);
    });

    const checkExist = properties.includes(data.product_id);

    socket.emit("home_event_response", {
      checkExist,
      product_id: data.product_id,
      like_id: data.like_id
    });
  });
};

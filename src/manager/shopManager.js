import minimongo from "minimongo";
const Manager = () => {
  var obj = {};
  var IndexedDb = minimongo.IndexedDb;
  var db = new IndexedDb({ namespace: "MyArcade" }, function () {
    // Add a collection to the database
    db.addCollection("shop");
    db.addCollection("cart");
    obj.addItemNew = (name, value) => {
      return new Promise((resolve, reject) => {
        const prod = {
          _name: name,
          _value: value,
        };
        db.shop.upsert(prod, function (res, err) {
          // Success:

          if (err) {
            reject(err);
          }
          resolve(res);
        });
      });
    };
    obj.getTotalCount = () => {
      return new Promise((resolve, reject) => {
        db.shop.find().fetch((res, err) => {
          if (err) {
            reject(err);
          }
          resolve(res.length);
        });
      });
    };
    obj.getItemsInRange = (start, end) => {
      return new Promise((resolve, reject) => {
        // db.shop.find({},{ skip:start, limit: end}).fetch((res,err)=>{
        db.shop.find({}, { limit: end }).fetch((res, err) => {
          if (err) {
            reject(err);
          }

          resolve(res.slice(start, end));
        });
      });
    };
  });
  return obj;
};

export default Manager;

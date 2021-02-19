'use strict';

class ModelInterface {
    constructor(model) {
        this.model = model;
    }

    read(id) {
        if(id) {
            return this.model.find({ _id: id});
        }
        return this.model.find({});
    }

    create(obj) {
        const document = new this.model(obj);
        return document.save();
    }

    update(id, obj) {
        return this.model.findThenUpdate({_id: id}, {name: obj.name, ball: obj.ball});
    }

    delete(id){
        return this.model.findThenDelete({_id: id});
    }
}

module.exports = ModelInterface;
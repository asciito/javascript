module.exports = {
    _data: [],

    /**
     * Return all the elements in the (Fake) Database
     * 
     * @returns {Array}
     */
    all() {
        // Prevent mutating the real reference to the data, if we just want to return the same array but in reverse
        return [...this._data].reverse();
    },

    /**
     * Find the first element that match the ID
     * 
     * @param {Number} id 
     * @returns {Object}
     */
    find(id) {
        return this._data.filter(obj => obj.id === id).pop();
    },

    /**
     * Create a new element in the (Fake) Database
     * 
     * @param {Object} payload 
     * @returns {Number} Return the ID of the newly cretaed Element
     */
    create(payload) {
        const id = Date.now() * Math.ceil(Math.random() * 100);
        this._data.push({id, ...payload});

        return id;
    },

    /**
     * Update an element if the element exists in the (Fake) Database
     * 
     * @param {Number} id 
     * @param {Object} payload
     */
    update(id, payload) {
        const index = this._findIndex(id);

        if (index === null) return null;

        const obj = this._data[index];

        for (let key in obj) {
            if (! payload.hasOwnProperty(key) || ! payload[key]) continue;
        
            obj[key] = payload[key];
            hasBeenUpdated = true;
        };

        return hasBeenUpdated;
    },

    /**
     * Delete an element from the (Fake) Database if exists
     * 
     * @param {Number} id 
     */
    delete(id) {
        const lastCount = this._data.length;

        if (this._findIndex(id) == null) return null;

        this._data = this._data.filter(obj => obj.id !== id);

        return lastCount > this._data.length;
    },

    /**
     * Return the index of the element, null if the element doesn't exists
     * 
     * @param {Number} id 
     * @returns {Number}
     */
    _findIndex(id) {
        const index = this._data.findIndex(el => el.id == id);
        return index !== -1 ? index : null;
    }
}
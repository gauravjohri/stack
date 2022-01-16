class Stack {
    collection;
    constructor(values) {
        this.collection = values;
    }
    add(element) {
        this.collection.push(element)
    }
    remove(index) {
        this.collection.splice(index, 1);
    }
    update(index, value) {
        this.collection[index] = value;
    }
    get() {
        return this.collection;
    }
    getByIindex(index) {
        return this.collection[index];
    }
    count() {
        return this.collection.length;
    }
    last() {
        return this.collection.pop();
    }
    first() {
        return this.collection.shift();
    }
    search(key, value) {
        let search = [];
        this.collection.map((element) => {
            if (element.hasOwnProperty(key) && element[key].search(value) !== -1)
                search.push(element[key].search(value) !== -1 ? element : []);
            return search;
        })
        return search;
    }
    has(key) {
        return this.collection.shift().hasOwnProperty(key);
    }
}
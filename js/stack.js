class Stack {

    collection;
    limit;

    constructor(values, limit = 2) {
        this.collection = values;
        this.limit = limit;
    }

    add(element) {
        this.collection.push(element)
    }

    has(key) {
        return this.collection.shift().hasOwnProperty(key);
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

    getWithPage(currentPage = 1) {
        let page = Math.ceil(this.count() / this.limit)
        let totalRecords = this.count();
        let curPage = (currentPage - 1) * this.limit;
        let data = this.collection.splice(curPage, this.limit);
        data.page = page;
        data.totalRecords = totalRecords;
        data.currentPage = currentPage;
        return data;
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

    searchByKey(key, value) {
        let search = [];
        this.collection.map((element) => {
            if (element.hasOwnProperty(key) && element[key].search(value) !== -1)
                search.push(element[key].search(value) !== -1 ? element : []);
            return search;
        })
        return search;
    }

    search(value) {
        let search = [];
        let found;
        this.collection.map((obj) => {
            for (let key in obj) {
                found = obj[key].toString().indexOf(value) !== -1 ? obj : ''
                if (found != "")
                    search.push(found);
            }
        })
        return search;
    }
}
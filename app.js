const addTodoList = (obj) => {
    // get lastcount
    let lastCount = getLastCount();
    increaseLastCount();

    // save data to localstorage
    let tmpObjArr = loadObjData('itemList');
    obj.itemId = ++lastCount;
    tmpObjArr.push(obj);
    saveObjData(tmpObjArr, 'itemList');

    window.document.dispatchEvent(new Event("DOMContentLoaded", {
        bubbles: true,
        cancelable: true
    }));
}

const updateCompleted = (id) => {
    const itemId = id;
    let tmpObjArr = loadObjData('itemList');
    //foreach에 들어가는 거랑 비슷
    tmpObjArr.forEach(obj => {
        if (obj.itemId == itemId) {
             //check state
            if(obj.completed == false) {
                obj.completed = true;
            } else {
                obj.completed = false;
            }
        }
    });

    saveObjData(tmpObjArr, 'itemList');
}

// store data to localstorage (js object array to JSON)
const saveObjData = (objArr, key) => {
    localStorage.setItem(key, JSON.stringify(objArr));
};

// load data from localstorage (JSON to js object array)
const loadObjData = (key) => {
    let objStr = localStorage.getItem(key);
    if (objStr === null) {
        return new Array();
    }
    return JSON.parse(objStr);
};

// get specific row from localstorage by itemId
const getSingleItem = (key, itemId) => {
    let objStr = localStorage.getItem(key);
    if (objStr === null) {
        return false;
    }
    let objArray = JSON.parse(objStr);
    let filteredObj = objArray.filter(obj => obj.itemId == itemId)[0];

    return filteredObj;
}

// count number of total records
const countTotalRecs = (key) => {
    let data = loadObjData(key);
    if (data === null) {
        return 0;
    }
    return data.length;
};

// get lastcount
const getLastCount = () => {
    let lastCount = localStorage.getItem('lastCount');
    if (lastCount == null) {
        lastCount = 0;
    }
    return lastCount * 1;
}

// increase 1 to lastcount
const increaseLastCount = () => {
    let tmp = getLastCount();
    localStorage.setItem('lastCount', ++tmp);
}
const saveData = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));
}

const getData = (key) => {
   return JSON.parse(localStorage.getItem(key));
}

export {getData , saveData}
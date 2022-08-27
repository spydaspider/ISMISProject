export default class SmallEngines{
    static indexObject = (arrOfObj) =>{
        for(let i = 0; i < arrOfObj.length; i+=1)
        {
            arrOfObj.id = i;
        }
        return arrOfObj;
    }
    static clearField = (field) =>{
        field.value = '';
    }
}
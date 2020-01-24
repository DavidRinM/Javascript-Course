import uniqid from "uniqid";

export default class List{
    constructor (){
        this.items = [];//When we add items, will be stores here
    }

    addItem (count, unit, ingredient){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(item);
        return item;
    }

    deleteItem (id){
        const index = this.items.findIndex(el => el.id === id);

        //[2,4,8] splice(1,1) -> returns 4, original array = [2,8]
        //[2,4,8] slice(1,1) -> returns 4, original array = [2,4,8]
        this.items.splice(index, 1); //just remove 1 element
    }

    updateCount (id, newCount){
        this.item.find(el => el.id === id).count = newCount; //returns the element itself and change count
    }
};
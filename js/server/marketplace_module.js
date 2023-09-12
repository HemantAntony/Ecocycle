var items = [
    {
        "name" : "Bird nest",
        "cost" : 700,
        "image" : "birdnest.jpeg"
    },
    {
        "name" : "Comb",
        "cost" : 100,
        "image" : "comb.jpeg"
    },
    {
        "name" : "Cooking utensils",
        "cost" : 300,
        "image" : "cookingTools.jpeg"
    },
    {
        "name" : "Cutting board",
        "cost" : 300,
        "image" : "cuttingBoard.jpeg"
    },
    {
        "name" : "Ladies handbag",
        "cost" : 1000,
        "image" : "ladiesHandbag.jpeg"
    },
    {
        "name" : "Stool",
        "cost" : 1200,
        "image" : "stool.jpeg"
    },
    {
        "name" : "Storage bag",
        "cost" : 400,
        "image" : "storageBag.jpeg"
    },
    {
        "name" : "Waterbottle",
        "cost" : 200,
        "image" : "waterbottle.jpeg"
    },

];


export function marketplaceItems() {
    return items;
}

export function buyItem(index) {
    console.log(items[index].name + " has been bought");
    alert(items[index].name + " has been bought and will arrive at your address in a couple days");
}

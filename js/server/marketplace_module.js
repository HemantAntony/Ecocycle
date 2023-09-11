var items = [
    {
        "name" : "Item1",
        "cost" : 500,
        "image" : "placeholder.png"
    },
    {
        "name" : "Item2",
        "cost" : 100,
        "image" : "placeholder.png"
    },
    {
        "name" : "Item3",
        "cost" : 1000,
        "image" : "placeholder.png"
    },
    {
        "name" : "Item4",
        "cost" : 300,
        "image" : "placeholder.png"
    },
    {
        "name" : "Item5",
        "cost" : 750,
        "image" : "placeholder.png"
    },
    {
        "name" : "Item6",
        "cost" : 225,
        "image" : "placeholder.png"
    }
];


export function marketplaceItems() {
    return items;
}

export function buyItem(index) {
    console.log(items[index].name + " has been bought");
    alert(items[index].name + " has been bought and will arrive at your address in a couple days");
}

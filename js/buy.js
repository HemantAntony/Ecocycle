import { buyItem, marketplaceItems } from "./server/marketplace_module.js";

var items = marketplaceItems();

for (let i = 0; i < items.length; i++) {
    let marketplaceItem = items[i];
    fetch('buy_item_prototype.html')
    .then(res => res.text())
    .then(text => {
        var template = document.createElement('template');
        template.innerHTML = text;
        var node = template.content.firstChild;
        node.getElementsByClassName('itemImage')[0].setAttribute("src", "./js/server/images/" + marketplaceItem.image);
        node.getElementsByClassName('itemName')[0].innerHTML = marketplaceItem.name;
        node.getElementsByClassName('itemBuyButton')[0].innerHTML = "Buy (₹" + marketplaceItem.cost + ")";
        node.getElementsByClassName('itemBuyButton')[0].onclick = () => {
            buyItem(i);
        }
        document.getElementsByClassName("itemsContainer")[0].append(template.content.firstChild);
    })
};

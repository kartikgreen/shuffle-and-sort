const init = (() => {
    const container = document.getElementById("grid-container");
    const shuffle = (items) => {
        let temp, randomNumber;
        for (let index = items.length - 1; index > 0; index--) {
            randomNumber = Math.floor((index + 1) * Math.random());
            temp = items[randomNumber];
            items[randomNumber] = items[index];
            items[index] = temp;
        }
        return items;
    }
    const sort = (items) => {
        items.sort((a, b) => a.firstChild.innerHTML - b.firstChild.innerHTML);
        return items;
    }
    const shuffleTheList = () => {
        for (const grid of shuffle([...container.children])) {
            container.append(grid);
        }
    }
    const sortTheList = () => {
        for (const grid of sort([...container.children])) {
            container.append(grid);
        }
    }
    return () => {
        return { shuffleTheList, sortTheList }
    }
})();
const app = init();
document.getElementById("shuffle-btn").onclick = app.shuffleTheList;
document.getElementById("sort-btn").onclick = app.sortTheList;
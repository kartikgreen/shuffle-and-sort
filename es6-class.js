class ShuffleAndSort {
    container = document.getElementById("grid-container");
    shuffle = (items) => {
        let temp, randomNumber;
        for (let index = items.length - 1; index > 0; index--) {
            randomNumber = Math.floor((index + 1) * Math.random());
            temp = items[randomNumber];
            items[randomNumber] = items[index];
            items[index] = temp;
        }
        return items;
    }
    sort = (items) => {
        items.sort((a, b) => a.firstChild.innerHTML - b.firstChild.innerHTML);
        return items;
    }
    shuffleTheList = () => {
        for (const grid of this.shuffle([...this.container.children])) {
            this.container.append(grid);
        }
    }
    sortTheList = () => {
        for (const grid of this.sort([...this.container.children])) {
            this.container.append(grid);
        }
    }
}

const shuffleAndSort = new ShuffleAndSort();
document.getElementById("sort-btn").onclick = shuffleAndSort.sortTheList;
document.getElementById("shuffle-btn").onclick = shuffleAndSort.shuffleTheList;
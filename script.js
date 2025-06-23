let count = 0; //state

const render = () => {
    document.getElementById('count').innerHTML = count;
}

const increment = () => {
    console.log(count);
    count++;
    render()
}

const decrement = () => {
    count--;
    console.log(count);
    render()
}

render();

document.getElementById('increment').addEventListener("click", increment);

document.getElementById('decrement').addEventListener("click", decrement);


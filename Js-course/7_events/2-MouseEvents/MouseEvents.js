const logo = document.querySelector('img');

const onClick1 = () => console.log('Click Event');
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    // const title = document.querySelector('#app-title');

    // if (title.style.fontSize === '32px') {
    //     title.style.fontSize = '5px';
    // } else {
    //     title.style.fontSize = '32px';
    // }
};

// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('down');
// const onMouseUp = () => console.log('up');
// const onMouseWheel = () => console.log('wheel');
// const onMouseOver = () => console.log('Over');
// const onMouseOut = () => console.log('Out');
// const onDragStart = () => console.log('Drag start');
// const onDrag = () => console.log('Drag');
// const onDragEnd = () => console.log('Drag End');
// const onDragLeave = () => console.log('Drag Leave');


// logo.addEventListener('click', onClick1);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('drag', onDrag);
// logo.addEventListener('dragend', onDragEnd);
// logo.addEventListener('dragleave', onDragLeave);
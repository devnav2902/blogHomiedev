// masonry
export function make_masonry_layout(idMasonry,numberCols = 3){
    const grid_system = document.getElementById(idMasonry);
    if(grid_system){
        const items = grid_system.querySelectorAll('.masonry-item');

        grid_system.classList.add('flex','align-item-start');
        
        grid_system.innerHTML = '';
        for(let count=0;count<numberCols;count++){
            const newCol = document.createElement('div');
            newCol.className = `col-${count+1} col`;
            grid_system.appendChild(newCol);
    
            newCol.style.width = `calc(100% / ${numberCols})`;
        }
    
        let currentCol = 0;
        for(let i = 0;i<items.length;i++){
            grid_system.querySelectorAll('.col')[currentCol].appendChild(items[i]);
            
            if(currentCol < numberCols - 1){
                currentCol++;
            }
            else {
                currentCol = 0;
            }
        }
    }
      
}

// find every item and push into array
// const arrayTags = [...formatData].map(post => post.tag);
// let uniqueTags = [];

// for(let i = 0;i<arrayTags.length;i++){
//     if(uniqueTags.indexOf(arrayTags[i]) === -1){
//         uniqueTags.push(arrayTags[i]);
//     }
// }
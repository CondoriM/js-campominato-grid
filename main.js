
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    startGame(event);
})

function startGame(event){

    const level = event.target[0].value
    let cells_num,cols_num;


    console.log(level);
    switch (level) {

        case 'easy':
            cells_num = 100;
            cols_num = 10;
        break;

        case 'medium':
            cells_num = 81;
            cols_num = 9;
        break;

        case 'hard':
            cells_num = 49;
            cols_num = 7;
        break;
    }

    grid_case(cells_num,cols_num)
    click_case('.cell','selected')
}

function grid_case(cells_num, cols_num) {

    const gameAreaElement = document.querySelector('main .cells')
    gameAreaElement.innerHTML = ''
  
  
    for (let i = 1; i <= cells_num; i++) {
        const cell = document.createElement('div');
        cell.append(i);

        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${cols_num})`;
  
      gameAreaElement.append(cell);  
    }  
}

function click_case(css_selector, css_class) {

    const cells = document.querySelectorAll(css_selector)
    
    for (let i = 0; i < cells.length; i++) {
      const cellElemnt = cells[i];
      
      cellElemnt.addEventListener('click', function () {
        console.log(this);
        
        this.classList.add(css_class)
      });
  
    }
  
  }
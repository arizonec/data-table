// const url = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
import { data } from './data.js'
let root = document.querySelector('.root');
let table = document.querySelector('.table');
let pagination = document.querySelector('ul');
let prev = document.createElement('button');
let buttonFilter = document.querySelector('.dropbtn');
prev.innerHTML = 'Prev';
prev.classList.add('colorPrev');
let next = document.createElement('button');
next.innerHTML = 'Next';
next.classList.add('colorNext');
root.appendChild(pagination);

const copyData = [...data];
let dataForParse = copyData;

const parse = (data) => {
    let liItems = [];
    let hasActive;
    let state = 0;

    const renderPagination = () => {
        for(let i = 1; i <= data.length / 50; i++) {
            let li = document.createElement('li');
            li.innerHTML = i;
            pagination.appendChild(li);
            liItems = [...liItems, li];
        }
    }
    renderPagination();

    for(let item of liItems) {
        item.addEventListener('click', function() {
            createLi(this);
        })
    }

    const createLi = (item) => {
        if(hasActive) {
            hasActive.classList.remove('active');
        }
        hasActive = item;
        item.classList.add('active');
    
        let pageNum = +item.innerHTML;
    
        let start = (pageNum - 1) * (50);
        let end = start + 50;
    
        let notes = data.slice(start, end);
    
        table.innerHTML = '';

        for(let note of notes) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
            
            createCell(note.fname, tr)
            createCell(note.lname, tr)
            createCell(note.tel, tr)
            createCell(note.address, tr)
            createCell(note.city, tr)
            createCell(note.state, tr)
            createCell(note.zip, tr)
        }
    }

    const loadFirst = () => {
        createLi(liItems[0]);
    }

    const createCell = (text, tr) => {
        let td = document.createElement('td');
        td.innerHTML = text;
        tr.appendChild(td);
    }

    next.addEventListener('click', () => {
        if(state == liItems.length - 1){
            state = 0;
            createLi(liItems[state])
        } else {
            createLi(liItems[state + 1]);
            state++; 
        }
    })
    prev.addEventListener('click', () => {
        if(state == 0){
            state = liItems.length - 1
            createLi(liItems[state]);
        } else {
            createLi(liItems[state - 1]);
            state--; 
        }
    })

    document.addEventListener('DOMContentLoaded', loadFirst);
    pagination.insertAdjacentElement('afterbegin', prev);
    pagination.insertAdjacentElement('beforeend', next);
 
    const sort = (array, val) => {
    let sorted = array.sort((a,b) => {
        if(a[val] > b[val]) {
            return 1;
        }
        if(a[val] < b[val]) {
            return -1;
        }
    });
    dataForParse = sorted;
    }

    
    console.log(dataForParse);
    myPopup.addEventListener('click', (e) => {
        let val = e.target.textContent;
        pagination.innerHTML = '';
        table.innerHTML = '';
        sort(dataForParse, val);
        parse(dataForParse);
        loadFirst();
    });

    const filterList = () => {
        document.getElementById("myPopup").classList.toggle("show");
    }
    buttonFilter.addEventListener('click', filterList);
}
parse(dataForParse);


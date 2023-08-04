document.getElementById('btn').addEventListener('click', 
function(){
    let input = document.getElementById('input').value;


    //creating the todo list elements
    let elem=document.createElement('li');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    btn1.innerText = "Done";
    btn2.innerText = "Delete";
    elem.innerText = input;
    let ul = document.querySelector('ul');

    //Appending the created elements to html
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);

    //Adding button functionality to created buttons
    btn1.addEventListener('click',
    function(){
        elem.style.textDecoration="line-through";
    }
    );
    btn2.addEventListener('click',
    function(){
        elem.remove();
    }
    );
}
);
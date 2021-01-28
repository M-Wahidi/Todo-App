//Selectors
const divs = document.getElementsByTagName('div')
const addbutton = document.querySelector('.add');
const textValue = document.querySelector('.input');
const taskcontianer = document.querySelector('.taskContianer')
const divAnimDel = document.querySelector('.deleteDivAnimation')
const ulList = document.querySelector('.ulList')
const filterlist = document.querySelector('.filter_todo')
// Handler
addbutton.addEventListener('click',(e)=>{
e.preventDefault()
create_del_Div(textValue,divs)
check()
});

ulList.addEventListener('click',(e)=>{
    
    deleteItem(e)
      if(ulList.childNodes.length < 10 ){
        taskcontianer.classList.remove('scroll')
      }
});
ulList.addEventListener('click',completeItem)
textValue.addEventListener('keyup',check)
filterlist.addEventListener('click',(e)=>{
    filterTodo(e)
    if(ulList.childNodes.length < 9 ){
        taskcontianer.classList.remove('scroll')
      } 

})

//Function
    // create a task div,Delete Button
function create_del_Div (textBox,div) {
    //Create A Div
        const createDiv = document.createElement('div')
        createDiv.setAttribute('class','taskdiv')
        // create li element 
        const li = document.createElement('li')
        li.setAttribute('class','li')
        li.innerText = textBox.value
        createDiv.appendChild(li)
    // add delete button
        const createDeleteButton = document.createElement('button')
        createDeleteButton.setAttribute('class','deleteButton')
        createDeleteButton.innerHTML = '-'
    //hover thru tasks
        createDiv.addEventListener('mouseenter',function(){
            createDiv.classList.add('hoverTask')
        })
        createDiv.addEventListener('mouseleave',function(){
            createDiv.classList.remove('hoverTask')
        })
        createDiv.append(createDeleteButton)
        ulList.appendChild(createDiv)     
   
        // reset the input field when add a task
        textValue.value = ""
}
function deleteItem (e){
const item = e.target
if(item.classList[0] === 'deleteButton'){
    const deldiv = item.parentElement;
    deldiv.classList.add('deleteDivAnimation')
   deldiv.addEventListener('transitionend',function(){
        deldiv.remove()
   })
}

}
        // complete item
function completeItem (e){
    const item = e.target
    if(item.classList[0] === 'taskdiv'){
      item.classList.toggle('completediv')
         }
    }
        // filter the list 

    function filterTodo(e) {
                const todos = ulList.childNodes;
        for(let i = 1; i<todos.length; i++ ){
            switch (e.target.value) {
                case "all":
                todos[i].style.display = "flex";
                break;
                case "completediv":
                if (todos[i].classList.contains('completediv')) {
                todos[i].style.display = "flex";
                
                } else {
                todos[i].style.display = "none";
                }
                break;
                case "uncompleted":
                    
                if (!todos[i].classList.contains('completediv')) {
                todos[i].style.display = "flex";
                } else {
                todos[i].style.display = "none";
                }
          
                break;
            } 
        }   
    }

        //Check Input field empty (disable the add button) / No of tasks
function check(){
    if(textValue.value.trim().length > 2){
        addbutton.classList.add('activeButton')
    }else{
        addbutton.classList.remove('activeButton')
    }
    if(ulList.childNodes.length >= 9 ){
        taskcontianer.classList.add('scroll')
      } 
     else if(ulList.childNodes.length <= 9 ){
        taskcontianer.classList.remove('scroll')
      }
    } 


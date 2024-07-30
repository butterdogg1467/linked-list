document.addEventListener('DOMContentLoaded', function(){

    let prependBox = document.querySelector('#prepend')
    let appendBox = document.querySelector('#append')
    let appendBtn = document.querySelector('.appendbutton')    
    let prependBtn = document.querySelector('.prependbutton');
    let atBox = document.querySelector('.atbox');
    let atButton = document.querySelector('.at');
    let containsBox = document.querySelector('.containsbox');
    let containsButton = document.querySelector('.contains');
    let findBox = document.querySelector('.findbox');
    let findButton = document.querySelector('.find');
    let sizeButton = document.querySelector('.size');
    let headButton = document.querySelector('.head');
    let tailButton = document.querySelector('.tail');
    let popButton = document.querySelector('.pop');
    let toStringButton = document.querySelector('.toString');

    let listCreated = false
    let list


    function linkedList(){
        let head = null

        function append(value){
            let newNode = node(value)
            if (head === null) {
                head = newNode
            } else {
                let current = head
                while (current.nextNode !== null) { 
                    current = current.nextNode
                }
                current.nextNode = newNode
            } 
            
            let current = head
            let output = []
            while (current !== null){
                output.push(current.value)
                current = current.nextNode
            }
            console.log(output)
        }

        function prepend(value){
            let newNode = node(value)
            if (head === null) {
                head = newNode
            } else {
                newNode.nextNode = head
                head = newNode
            } 
            
            let current = head
            let output = []
            while (current !== null){
                output.push(current.value)
                current = current.nextNode
            }
            console.log(output)

        }

        function size(){
        }

        function returnHead(){
            console.log(head.value)
        }

        function returnTail(){
        }

        function at(index){

        }

        function pop(){

        }

        function contains(value){

        }

        function find(value){

        }

        function toString(){

        }
        

        return {
            append,
            prepend,
            size,
            returnHead,
            returnTail,
            at,
            pop,
            contains,
            find,
            toString
        }
    }
    
    function node(value = null, nextNode = null){
        return {
            value,
            nextNode
        }
    }
    
    appendBtn.addEventListener('click', function(){
        if (listCreated === false) {
            list = linkedList()
            listCreated = true
        }
        
        if (listCreated === true) {
            list.append(appendBox.value)
            appendBox.value = ''
        }
        
    })

    prependBtn.addEventListener('click', function(){
        if (listCreated === false) {
            list = linkedList()
            listCreated = true
        }
        
        if (listCreated === true) {
            list.prepend(prependBox.value)
            prependBox.value = ''
        }
        
    })

    headButton.addEventListener('click', function(){
        if (listCreated){
            list.returnHead()
        } else {
            console.log("No List!")
        }
    })



































})
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
            let count = 1
            let current = head
            while (current.nextNode !== null) {
                current = current.nextNode
                count += 1
            }
            console.log(count)
        }

        function returnHead(){
            console.log(head.value)
        }

        function returnTail(){
            let current = head
            if (head.nextNode === null) {
                let tail = head
                console.log(tail.value)
            }
            while (current.nextNode !== null){
                current = current.nextNode
                if (current.nextNode === null){
                    let tail = current
                    console.log(tail.value)
                }
            }
        }

        function at(index){
            let currentIndex = 0
            let current = head

            while (currentIndex !== index) { 
                if (currentIndex === index){
                    console.log(current.value)
                    console.log(currentIndex)
                    return
                }
                currentIndex += 1
                current = current.nextNode

                
            }
            if (current === null){
                console.log('Index Not Found!')
                return
            }

        }

        function pop(){
            let current = head

            if (head === null){
                console.log('List is empty!')
                toString()
            }

            if (head.nextNode === null){
                head = null
                console.log('Head is ' + head)
                toString()
            }

            if (head.nextNode !== null && head.nextNode.nextNode === null){
                head.nextNode = null
                returnTail()
                toString()
            }

            while (current.nextNode.nextNode !== null){
                current = current.nextNode
                if (current.nextNode.nextNode === null){
                    current.nextNode = null
                    returnTail()
                    toString()
                }
            }   
        }

        function contains(value){

        }

        function find(value){

        }

        function toString(){
            let current = head
            let output = []
            while (current !== null){
                output.push(current.value)
                current = current.nextNode
            }
            console.log(output)

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

    tailButton.addEventListener('click', function(){
        if (listCreated){
            list.returnTail()
        } else {
            console.log("No List!")
        }
    })

    sizeButton.addEventListener('click', function(){
        if (listCreated){
            list.size()
        } else {
            console.log("No List!")
        }
    })

    atButton.addEventListener('click', function(){
        if (listCreated){
            list.at(atBox.value)
        } else {
            console.log("No List!")
        }
    })

    popButton.addEventListener('click', function(){
        if (listCreated){
            list.pop()
        } else {
            console.log("No List!")
        }
        
    })































})
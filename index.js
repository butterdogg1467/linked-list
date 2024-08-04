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
    let insertAtBox = document.querySelector('.insertatbox');
    let insertAtIndexBox = document.querySelector('.insertatindexbox')
    let insertAtButton = document.querySelector('.insertat');
    let removeAtBox = document.querySelector('.removeat');
    let removeAtButton = document.querySelector('.removeatbutton');

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

            while (current !== null) {
                let currentStringIndex = currentIndex.toString()
                if (currentStringIndex === index){
                    console.log(current.value)
                    return
                }
                currentIndex += 1
                current = current.nextNode

                
            }
                console.log('Index Not Found!')
                

        }

        function pop(){
            let current = head

            if (head === null){
                console.log('List is empty!')
                listToString()
            }

            if (head.nextNode === null){
                head = null
                console.log('Head is ' + head)
                listToString()
            }

            if (head.nextNode !== null && head.nextNode.nextNode === null){
                head.nextNode = null
                returnTail()
                listToString()
            }

            while (current.nextNode.nextNode !== null){
                current = current.nextNode
                if (current.nextNode.nextNode === null){
                    current.nextNode = null
                    returnTail()
                    listToString()
                }
            }   
        }

        function contains(value){
            let current = head
            if (head === null) {
                console.log('Head is null')
                return
            }
            while (current !== null) {
                if (current.value === value) {
                    console.log('True')
                    return
                } 
                current = current.nextNode
                
            }
            console.log('False')
        }

        function find(value){
            let current = head
            let valueIndex = 0
            
            while (current !== null) {
                if (current.value === value) {
                    console.log(valueIndex)
                    return
                }
                valueIndex += 1
                current = current.nextNode
            }
            console.log('Value does not exist')
        }

        function listToString(){
            let current = head
            let output = ''
            while (current !== null){
                output += '( ' + current.value + ' ) -> '
                if (current.nextNode === null) {
                    output += ' null'
                }
                current = current.nextNode
            }
            console.log(output)

        }

        function insertAt(value, index) {
            let newNode = node(value)
            let currentIndex = 0
            let numberIndex = Number(index)
            let valuePlaceIndex = numberIndex - 1
            let current = head

            if (head === null || numberIndex === 0){
                head = newNode
                newNode.nextNode = head
            }

            while (current !== null) {
                if (currentIndex === valuePlaceIndex) {
                    newNode.nextNode = current.nextNode
                    current.nextNode = newNode
                    return
                }
                currentIndex += 1
                current = current.nextNode
            }
            console.log('Index not found')

        }

        function removeAt(index){
            let current = head
            let currentIndex = 0
            let numberIndex = Number(index)
            let valueRemoveIndex = numberIndex - 1

            if (numberIndex === 0){
                head = head.nextNode
                return
            }

            while (current !== null) {
                if (currentIndex === valueRemoveIndex && current.nextNode.nextNode !== null) {
                    current.nextNode = current.nextNode.nextNode
                    return
                }
                else if (currentIndex === valueRemoveIndex && current.nextNode.nextNode === null) {
                    current.nextNode = current.nextNode
                    return
                }
                current = current.nextNode
                currentIndex += 1
            }
            console.log('Index not found')
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
            listToString,
            insertAt,
            removeAt
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

    containsButton.addEventListener('click', function(){
        if (listCreated){
            list.contains(containsBox.value)
        } else {
            console.log("No List!")
        }
        
    })

    findButton.addEventListener('click', function(){
        if (listCreated){
            list.find(findBox.value)
        } else {
            console.log("No List!")
        }
    })


    toStringButton.addEventListener('click', function(){
        if (listCreated){
            list.listToString()
        } else {
            console.log("No List!")
        }
    })

    insertAtButton.addEventListener('click', function(){
        if (listCreated){
            list.insertAt(insertAtBox.value, insertAtIndexBox.value)
        } else {
            console.log("No List!")
        }
    })

    removeAtButton.addEventListener('click', function(){
        if (listCreated){
            list.removeAt(removeAtBox.value)
        } else {
            console.log("No List!")
        }
    })























})
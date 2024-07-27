document.addEventListener('DOMContentLoaded', function(){

    let button = document.querySelector('.button')

    function linkedList(){
        let newNode = node()
        let head = null
        function append(){
            if (head === null) {
                head = newNode
            }
        }
        console.log(newNode.value)
        console.log(newNode.nextNode)
        return {
            append
        }
    }
    
    function node(value = null, nextNode = null){
        return {
            value,
            nextNode
        }
    }
    
    button.addEventListener('click', function(){
        linkedList()
    })






































})
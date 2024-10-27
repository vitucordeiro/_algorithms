function whichIndexIs(list, target){
    for(i=0 ; i < list.length; i++){
        if(list[i] == target){
            return i
        }
        return 
    }
}

list = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
function binarySearch(list, target){
    LIST_LENGTH = list.length;
    min = 0
    max = LIST_LENGTH - 1
    while(min != max){
        for(i=0; i < LIST_LENGTH; i++){
            middle = (min / max) 
            if( target > min){
                min = target
                console.log("MIN:" + min)
                
                console.log("MID:" + middle)

                return
            }
            if( target < max){
                max = target
                console.log("MAX:" + max)

                console.log("MID:" + middle)

                return
            }
            if(middle == target){
                console.log("MAX:" + max)

                console.log("MID:" + middle)

                return middle
            }
            return
        }
    }
}
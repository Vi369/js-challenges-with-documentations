var trap = function(height) {
    const length = height.length;
    const left = new Array(length)
    const right = new Array(length)
    let ans = 0;


    left[0] = height[0];

    for(let i = 1 ; i<length; i++){
        left[i] = Math.max(left[i-1], height[i])
    }

    right[length - 1 ] = height[length -1];

    for(let i = length - 2; i>=0; i--){
        right[i] = Math.max(right[i+1] , height[i])
        
    }

    for(let i = 0 ; i< length; i++){
        ans += (Math.min(left[i],right[i]) - height[i])
    }

    return ans;
};
var maxArea = function(height){
    let left = 0;
    let right = height.length -1;
    let maxArea = 0;

    while(left < right){
        let length = Math.min(height[left], height[right]);
        let width = right - left;

        let newArea = length * width;

        maxArea = Math.max(newArea, maxArea);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
}



const height = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height));
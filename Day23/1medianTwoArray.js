var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length === 0 && nums2.length === 0){
        return null
    }

    const mergedArray = [...nums1, ...nums2];
    
    mergedArray.sort((a,b)=> (a-b));

    let length = mergedArray.length;
    let mid = Math.floor(length / 2);

    if(length % 2 === 0){
        return ((mergedArray[mid] + mergedArray[mid-1])/2)
    }else{
        return mergedArray[mid];
    }
};
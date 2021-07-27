

// bruteforce 

const nums1 = [1,3,4,5];
const nums2 = [2];


function bruteForce(nums1,nums2) {


    const totalArray = [...nums1, ...nums2].sort((a,b) => a - b);

    const midPoint = Math.floor(totalArray.length/2);

    if(totalArray.length % 2 !== 0) {
        return totalArray[midPoint];
    } else {
        return (totalArray[midPoint] + totalArray[midPoint-1])/2;
    }
}

console.log(bruteForce(nums1,nums2));
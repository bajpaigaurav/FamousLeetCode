

// bruteforce 

const nums1 = [1,3];
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

// non bruteforce solution - with merge sort.

function findMedian(nums1 = [], nums2 = []) {

    let i1 = 0;
    let i2 = 0;

    const len1 = nums1.length;
    const len2 = nums2.length;

    const len = len1 + len2;

    // if empty 
    if(len === 0) {
        return null;
    }

    const merged = [];

    while(i1 < len1 && i2 < len2) {
        if(nums1[i1] <= nums2[i2]) {
            merged.push(nums1[i1++]);
        } else {
            merged.push(nums2[i2++]);
        }
    }

    while(i1 < len1) {
        merged.push(nums1[i1++]);
    }

    while(i2 < len2) {
        merged.push(nums2[i2++]);
    }

    const isOdd = len%2;

    if(isOdd) {
        console.log('length', (len-1)/2,merged);
        return merged[(len-1)/2];
    } else {
        return (merged[len/2] + merged[len/2 - 1])/2;
    }

}

console.log(findMedian(nums1,nums2));

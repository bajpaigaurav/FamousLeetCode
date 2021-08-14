




const extractObjectKeys = (object: any) => {
    let objectKeys: string[] = [];

    Object.keys(object).forEach(
        objectKey => {
            const value = object[objectKey];
            if(value !== 'object') {
                objectKeys.push(objectKey);
            } else {
                objectKeys = [...objectKeys, ...extractObjectKeys(value)];
            }
        
    });
    return objectKeys;
};
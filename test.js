async function doubleNumberAfter3secs(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2);
        }, 3000);
    });
}

async function addSync(){
    const a = await doubleNumberAfter3secs(10);
    const b = await doubleNumberAfter3secs(20)
    console.log(a + b)
}

addSync()
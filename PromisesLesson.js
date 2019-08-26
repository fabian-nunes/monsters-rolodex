const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have sucessed');
    },1000);
});

myPromise.then(value => console.log(value));
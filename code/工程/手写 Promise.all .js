function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0;

        if (promises.length === 0) return resolve([]);

        promises.forEach((p, i) => {
            Promise.resolve(p).then(
                (val) => {
                    results[i] = val;
                    count++;
                    if (count === promises.length) resolve(results);
                },
                (err) => reject(err)
            );
        });
    });
}

// 测试
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
const p4 = Promise.reject("Error");

myPromiseAll([p1, p2, p3]).then(console.log); // [1, 2, 3]
myPromiseAll([p1, p4, p3]).catch(console.log); // "Error"

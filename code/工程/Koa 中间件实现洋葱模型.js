function compose(middlewares) {
    return function (ctx) {
        let index = -1;
        function dispatch(i) {
            if (i <= index)
                return Promise.reject(
                    new Error("next() called multiple times")
                );
            index = i;
            let fn = middlewares[i];
            if (!fn) return Promise.resolve();
            return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
        }
        return dispatch(0);
    };
}

// 测试
const middlewares = [
    async (ctx, next) => {
        console.log("middleware 1 start");
        await next();
        console.log("middleware 1 end");
    },
    async (ctx, next) => {
        console.log("middleware 2 start");
        await next();
        console.log("middleware 2 end");
    },
    async (ctx, next) => {
        console.log("middleware 3 start");
        await next();
        console.log("middleware 3 end");
    },
];

const fn = compose(middlewares);
fn({}).then(() => console.log("Done"));

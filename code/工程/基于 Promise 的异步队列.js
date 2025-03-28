class AsyncQueue {
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.running = 0;
    }

    run(task) {
        return new Promise((resolve, reject) => {
            const wrapper = async () => {
                if (this.running >= this.limit) {
                    this.queue.push(wrapper);
                    return;
                }

                this.running++;
                try {
                    const result = await task();
                    resolve(result);
                } catch (err) {
                    reject(err);
                } finally {
                    this.running--;
                    if (this.queue.length) {
                        const nextTask = this.queue.shift();
                        nextTask();
                    }
                }
            };
            wrapper();
        });
    }
}

const delay = (ms, val) => () => new Promise(res => setTimeout(() => res(val), ms));

const queue = new AsyncQueue(2);
queue.run(delay(1000, "Task 1")).then(console.log);
queue.run(delay(500, "Task 2")).then(console.log);
queue.run(delay(300, "Task 3")).then(console.log);
queue.run(delay(200, "Task 4")).then(console.log);
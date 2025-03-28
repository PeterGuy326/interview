function isBipartite(graph) {
    const color = new Array(graph.length).fill(-1); // -1 表示没有颜色，0 和 1 表示两种颜色

    // BFS 判断每个组件是否为二分图
    function bfs(start) {
        const queue = [start];
        color[start] = 0; // 给起始节点分配颜色 0

        while (queue.length > 0) {
            const node = queue.shift();
            for (let neighbor of graph[node]) {
                if (color[neighbor] === -1) {
                    // 如果邻居没有颜色，给它分配相反的颜色
                    color[neighbor] = 1 - color[node];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    // 如果邻居的颜色和当前节点相同，说明不是二分图
                    return false;
                }
            }
        }
        return true;
    }

    // 因为图可能是多个组件，所以遍历所有节点
    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1) {
            if (!bfs(i)) {
                return false;
            }
        }
    }

    return true;
}

// 示例
const graph1 = [[1, 3], [0, 2], [1, 3], [0, 2]];
console.log(isBipartite(graph1)); // true

const graph2 = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];
console.log(isBipartite(graph2)); // false

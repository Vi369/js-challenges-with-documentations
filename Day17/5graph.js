/**
 * Activity 5: Graph
 * Task: 9 Implement a Graph class with methods to 
 * add vertices , add edges, and perform a breath- first search(bfs).
*/

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(source, destination){// vertex1 , vertex2
        if(!this.adjacencyList[source]){
            this.addVertex(source);
        }

        if(!this.adjacencyList[destination]){
            this.addVertex(destination);
        }

        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
    }

    //breath- first search
    BFS(start){
        const queue = [start];
        // const result = [];
        const visited = new Set();
        let currentVertex;

        while(queue.length > 0){
            currentVertex = queue.shift();
            // result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbour)=>{
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                };
            });
        };
        // console.log(result)
        // console.log(visited)

        return visited;
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E') // automatically added this edge

console.log(graph);

const result = graph.BFS('A');
console.log(result);



// Task 10 : use the graph class to represent a simple network and perform bfs to find the shotest path between two nodes.
Graph.prototype.bfsShortestPath = function(start, target){

    if(!this.adjacencyList[start] || !this.adjacencyList[target]){
        return null;
    }
    const queue = [[start]]; // initial staring path
    const visited = new Set(); 
    
    while(queue.length > 0){
        const path = queue.shift() // dequeue path 
        const node = path[path.length - 1] // in path last vertex 

        if(node === target){ 
            return path;
        }

        for (const neighbour of this.adjacencyList[node]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                const newPath = [...path, neighbour];
                queue.push(newPath);
            }
        }
    }
    return null;
}


const simpleNetwork = new Graph();

simpleNetwork .addVertex('A');
simpleNetwork .addVertex('B');
simpleNetwork .addVertex('C');

simpleNetwork .addEdge('A', 'B');
simpleNetwork .addEdge('A', 'C');
simpleNetwork .addEdge('B', 'C');
simpleNetwork .addEdge('D', 'E')

console.log("Simple network",simpleNetwork)


console.log("Shortest Path:", simpleNetwork.bfsShortestPath('A', 'D')); // null
console.log("Shortest Path:", simpleNetwork.bfsShortestPath('A', 'C'));  

  


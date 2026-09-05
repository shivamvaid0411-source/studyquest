/* ============================================================
   DATA STRUCTURES (ICS 301)
   Matches the official college syllabus unit-by-unit (unit titles,
   proposed lecture counts, and topic groupings).
   ============================================================ */
SUBJECTS.push(
{
  code:"ICS 301", name:"Data Structures", credits:3, ltp:"3-0-0", icon:"💻", color:"purple",
  units:[
    {title:"Introduction, Arrays, Searching & Sorting", lectures:9, topics:[
      {title:"Algorithm Complexity & Asymptotic Notations", xp:25,
        intuition:"Big-O measures how an algorithm's runtime or memory scales as input size n grows toward infinity, ignoring constant hardware differences. Big-Oh (O) is the upper bound / worst case, Big-Omega (Ω) is the lower bound / best case, and Big-Theta (Θ) is the tight bound / average case — think of them as a ceiling, a floor, and a snug sandwich around the true growth rate.",
        technical:"Formal definition: f(n) = O(g(n)) if there exist positive constants c and n0 such that 0 ≤ f(n) ≤ c·g(n) for all n ≥ n0.\n\nExample: prove 3n² + 5n = O(n²)\n→ 3n² + 5n ≤ 4n² for all n ≥ 5, so c=4, n0=5.",
        trap:"7–10 marks: 'Differentiate between Big-Oh, Big-Omega and Big-Theta with graphical representations' or 'Prove 3n²+5n = O(n²)'. Examiners want the formal definition WITH explicit values of c and n0 — sketching the growth-rate graph is what secures full marks.",
        resources:[
          {name:"Gate Smashers — Asymptotic Notations in Algorithms", url:"https://www.youtube.com/results?search_query=gate+smashers+asymptotic+notations"},
          {name:"Abdul Bari — Algorithms: Big O, Omega, Theta", url:"https://www.youtube.com/results?search_query=abdul+bari+big+o+omega+theta"}
        ]},
      {title:"Arrays & Memory Address Calculation", xp:30,
        intuition:"RAM is really just one long 1D line of memory. A 2D array has to be mathematically 'flattened' into that line, either row-by-row (Row Major Order) or column-by-column (Column Major Order), so every element gets one unique address.",
        technical:"For A[L1..U1][L2..U2], base address B, element size W, columns N=(U2-L2+1), rows M=(U1-L1+1):\n\nRow Major: Address(A[i][j]) = B + W × [(i−L1)×N + (j−L2)]\nColumn Major: Address(A[i][j]) = B + W × [(j−L2)×M + (i−L1)]",
        trap:"10 marks: derive the general address formula for arbitrary lower bounds and compute an exact address (e.g. A[5][30], B=2000, W=4). Common slip: forgetting that subtracting a negative lower bound ADDS to the offset (5 − (−10) = 15).",
        resources:[{name:"Jenny's Lectures — Address Calculation in 2D & 3D Arrays", url:"https://www.youtube.com/results?search_query=jennys+lectures+address+calculation+in+2d+array"}]},
      {title:"Sparse Matrices & Triplet Representation", xp:25,
        intuition:"A sparse matrix is mostly zeros. Instead of wasting memory storing every zero, we store only the non-zero elements as (row, column, value) triples.",
        technical:"3-tuple table: first row stores (totalRows, totalCols, nonZeroCount), followed by one row per non-zero entry.\nFast Transpose algorithm avoids the O(cols×terms) naive transpose by pre-computing where each column's elements will land, achieving O(cols+terms).",
        trap:"7 marks: represent a given sparse matrix in triplet form and implement the Fast Transpose algorithm — examiners check the pre-count/index-setting step, not just the final table.",
        resources:[{name:"Knowledge Gate — Sparse Matrix Representation", url:"https://www.youtube.com/results?search_query=knowledge+gate+sparse+matrix+representation"}]},
      {title:"Searching Algorithms (Linear, Binary, Index-Sequential)", xp:25,
        intuition:"Linear search checks every element one by one — simple but slow. Binary search repeatedly halves a SORTED array, throwing away half the remaining elements each comparison.",
        technical:"Binary search recurrence: T(n) = T(n/2) + c → T(n) = O(log n) by the Master Theorem.\nIndex-sequential search builds a small index table to jump close to the target before doing a short linear scan.",
        trap:"7 marks: write recursive binary search and formally derive its O(log n) complexity from the recurrence relation — don't just state the answer, show the substitution.",
        resources:[{name:"Abdul Bari — Binary Search Algorithm and Analysis", url:"https://www.youtube.com/results?search_query=abdul+bari+binary+search+algorithm"}]},
      {title:"Sorting Algorithms (Insertion, Selection, Bubble, Quick, Merge, Radix)", xp:35,
        intuition:"Comparison sorts (Quick, Merge) reorder elements by comparing pairs. Quick Sort picks a pivot and partitions around it; Merge Sort splits in half, sorts each half, then merges. Radix Sort skips comparisons entirely — it buckets numbers digit by digit.",
        technical:"Quick Sort: best/avg O(n log n), worst O(n²) — degrades badly when the array is already sorted and the first/last element is always chosen as pivot.\nMerge Sort: always O(n log n), stable, needs O(n) extra space.\nRadix Sort: O(d·(n+k)) where d = number of digits, k = bucket range.",
        trap:"10 marks: trace Quick Sort's partitioning step-by-step on a given array, AND explain precisely why it degrades to O(n²) on sorted input with a poor pivot choice.",
        resources:[
          {name:"VisuAlgo — Sorting Visualizer", url:"https://visualgo.net/en/sorting"},
          {name:"Gate Smashers — Quick Sort Algorithm & Partitioning", url:"https://www.youtube.com/results?search_query=gate+smashers+quick+sort+algorithm"}
        ]}
    ]},
    {title:"Linked Lists & Hashing", lectures:9, topics:[
      {title:"Singly, Doubly & Circular Linked Lists", xp:30,
        intuition:"A linked list trades an array's fixed contiguous memory for flexible, scattered nodes connected by pointers — you pay a pointer's worth of memory per element but gain O(1) insert/delete once you're at the right spot.",
        technical:"struct Node { int data; struct Node* next; };\nReversal: iterate with prev/curr/next pointers, O(n) time, O(1) space.\nFloyd's Cycle Detection (Tortoise & Hare): slow pointer moves 1 step, fast moves 2 — if they meet, there's a loop.",
        trap:"10 marks: write complete C functions to insert/delete at an arbitrary position, reverse a list in O(n), and detect + remove a loop using Floyd's algorithm — examiners deduct marks for missing NULL-pointer edge cases.",
        resources:[{name:"Neso Academy — Singly & Doubly Linked List", url:"https://www.youtube.com/results?search_query=neso+academy+linked+list"}]},
      {title:"Polynomial Operations Using Linked Lists", xp:20,
        intuition:"Each polynomial term becomes a node holding (coefficient, exponent, next) — adding two polynomials is really just a coordinated merge, adding coefficients wherever exponents match.",
        technical:"AddPoly(p1, p2): walk both lists simultaneously; if exponents equal, sum coefficients into a new node; otherwise copy the smaller-exponent term and advance only that pointer.",
        trap:"7 marks: full C algorithm for polynomial addition using linked lists — remember to handle leftover terms once one list is exhausted.",
        resources:[{name:"Gate Smashers — Polynomial Representation using Linked List", url:"https://www.youtube.com/results?search_query=gate+smashers+polynomial+linked+list"}]},
      {title:"Hashing & Collision Resolution Techniques", xp:30,
        intuition:"A hash function maps a key to a table slot in O(1) — the catch is collisions, when two keys land on the same slot. Different strategies decide what happens next.",
        technical:"Division method: h(k) = k mod m.\nOpen addressing: Linear Probing (h(k)+i), Quadratic Probing (h(k)+i²), Double Hashing (h1(k)+i·h2(k)).\nClosed addressing: Separate Chaining (linked list per bucket).",
        trap:"10 marks numerical: insert a given key sequence into a table of size m=11 using linear probing AND double hashing, counting collisions for each — a very common exam question pattern.",
        resources:[{name:"Gate Smashers — Hashing Techniques & Collision Resolution", url:"https://www.youtube.com/results?search_query=gate+smashers+hashing+collision+resolution"}]}
    ]},
    {title:"Stacks, Recursion & Queues", lectures:10, topics:[
      {title:"Stacks & Expression Conversions", xp:30,
        intuition:"A stack is LIFO — last in, first out. It's the natural data structure for tracking nested structure, which is exactly why it converts infix expressions (with precedence & parentheses) into postfix/prefix.",
        technical:"Core ops: push, pop, peek, isEmpty — all O(1).\nInfix→Postfix: scan left to right; push operators respecting precedence, pop to output when a higher/equal-precedence operator arrives or on ')'.",
        trap:"10 marks: step-by-step tabular conversion of a long infix expression like A + (B*C − (D/E^F)*G)*H — examiners want every stack state at every step, not just the final answer.",
        resources:[{name:"Jenny's Lectures — Infix to Postfix Conversion using Stack", url:"https://www.youtube.com/results?search_query=jennys+lectures+infix+to+postfix"}]},
      {title:"Recursion, Activation Records & Tower of Hanoi", xp:25,
        intuition:"Every recursive call pushes a fresh activation record (local variables, return address) onto the call stack. Tower of Hanoi is the classic example: to move n disks, first move n−1 disks out of the way, move the biggest disk, then move the n−1 disks back on top.",
        technical:"T(n) = 2T(n−1) + 1 ⟹ T(n) = O(2ⁿ). Minimum moves for n disks = 2ⁿ − 1.",
        trap:"7 marks: write recursive Tower of Hanoi code AND draw the full recursion tree for n=3 — missing the tree diagram is the #1 way students lose marks here.",
        resources:[{name:"Abdul Bari — Tower of Hanoi Problem", url:"https://www.youtube.com/results?search_query=abdul+bari+tower+of+hanoi"}]},
      {title:"Queues, Circular Queues & Priority Queues", xp:30,
        intuition:"A queue is FIFO. A plain linear queue wastes memory once front moves forward (false overflow) — a Circular Queue fixes this by wrapping the rear pointer around using modulo arithmetic.",
        technical:"rear = (rear + 1) % capacity.\nDeque: input-restricted (insert one end only) vs output-restricted (delete one end only) double-ended queues.",
        trap:"10 marks: explain why a linear queue suffers false overflow, then write full C enqueue/dequeue functions for a circular queue handling BOTH the full and empty boundary conditions correctly.",
        resources:[{name:"Gate Smashers — Circular Queue Implementation", url:"https://www.youtube.com/results?search_query=gate+smashers+circular+queue"}]}
    ]},
    {title:"Trees, Binary Search Trees & Heaps", lectures:10, topics:[
      {title:"Binary Tree Fundamentals & Traversals", xp:30,
        intuition:"A binary tree is a hierarchy where every node has at most two children. The three depth-first traversals differ only in WHEN you visit the root relative to the subtrees: In-order (Left-Root-Right), Pre-order (Root-Left-Right), Post-order (Left-Right-Root).",
        technical:"Given In-order + Pre-order (or In-order + Post-order), you can reconstruct a UNIQUE binary tree: the first element of Pre-order is the root; find it in In-order to split into left/right subtrees, then recurse.",
        trap:"10 marks: given In-order and Pre-order sequences, construct the unique original binary tree step by step — draw every intermediate split, not just the final tree.",
        resources:[{name:"Gate Smashers — Construct Tree from Inorder and Preorder", url:"https://www.youtube.com/results?search_query=gate+smashers+construct+tree+inorder+preorder"}]},
      {title:"Binary Search Trees (BST) & Operations", xp:30,
        intuition:"A BST keeps every left-subtree value smaller and every right-subtree value larger than its root — this ordering makes search, insert and delete all O(log n) on a balanced tree.",
        technical:"Deletion has 3 cases: (1) leaf node — remove directly, (2) one child — replace node with its child, (3) two children — replace with the In-order Successor (smallest in right subtree) or Predecessor (largest in left subtree).",
        trap:"10 marks: build a BST from a numeric sequence step-by-step, then demonstrate deleting a two-children node using the in-order successor — a very frequent exam question.",
        resources:[{name:"Abdul Bari — Binary Search Tree Deletion", url:"https://www.youtube.com/results?search_query=abdul+bari+binary+search+tree+deletion"}]},
      {title:"Threaded Binary Trees & Huffman Coding", xp:25,
        intuition:"Normal binary trees waste their NULL child pointers. Threaded trees repurpose those NULLs to point directly to the in-order predecessor/successor, enabling stack-free traversal. Huffman Coding builds optimal prefix-free codes by always merging the two least-frequent symbols first (a greedy strategy using a min-priority-queue).",
        technical:"Huffman: repeatedly pop the two smallest-frequency nodes, merge into a new parent node (frequency = sum), push back, until one tree remains. Left edge = 0, right edge = 1.",
        trap:"7 marks: construct a Huffman tree for given character frequencies and calculate exactly how many bits are saved versus fixed-length encoding.",
        resources:[{name:"Knowledge Gate — Huffman Coding with Example", url:"https://www.youtube.com/results?search_query=knowledge+gate+huffman+coding"}]},
      {title:"AVL Trees, B-Trees & Binary Heaps", xp:35,
        intuition:"An AVL Tree is a BST that self-balances after every insertion so no subtree ever gets too lopsided (Balance Factor stays in {−1,0,+1}). A Binary Heap is a complete tree used for O(log n) priority extraction (Heap Sort). B-Trees generalize this to multi-way branching, ideal for databases.",
        technical:"AVL rotations: LL (single right rotate), RR (single left rotate), LR (left-right double rotate), RL (right-left double rotate) — triggered whenever |balance factor| becomes 2.",
        trap:"10 marks: insert a full sequence of numbers into an AVL tree, clearly labeling EVERY rotation type performed at each step — partial credit is lost for unlabeled rotations.",
        resources:[
          {name:"VisuAlgo — AVL Tree Visualizer", url:"https://visualgo.net/en/bst"},
          {name:"Abdul Bari — AVL Tree Rotations", url:"https://www.youtube.com/results?search_query=abdul+bari+avl+tree+rotations"}
        ]}
    ]},
    {title:"Graphs", lectures:7, topics:[
      {title:"Graph Representations & Traversals (BFS & DFS)", xp:30,
        intuition:"A graph is a set of nodes connected by edges. Adjacency Matrix is simple but O(V²) space; Adjacency List is memory-efficient at O(V+E). BFS explores level-by-level using a queue; DFS dives deep first using a stack (or recursion).",
        technical:"BFS: O(V+E), uses a queue + visited array, gives shortest path in unweighted graphs.\nDFS: O(V+E), uses recursion/stack, useful for cycle detection and topological sort.",
        trap:"7–10 marks: write BFS/DFS pseudocode AND trace it on a given graph, showing discovery order and the queue/stack state at every step.",
        resources:[{name:"Abdul Bari — Graph Traversals: BFS and DFS", url:"https://www.youtube.com/results?search_query=abdul+bari+graph+traversal+bfs+dfs"}]},
      {title:"Minimum Spanning Trees (Prim's & Kruskal's)", xp:35,
        intuition:"A Minimum Spanning Tree connects all V vertices using exactly V−1 edges with the smallest possible total weight. Prim's grows the tree outward from one vertex (greedy on vertices); Kruskal's sorts ALL edges globally and greedily adds the cheapest one that doesn't form a cycle.",
        technical:"Prim's: O(E log V) with a min-heap.\nKruskal's: sort edges O(E log E), then use Disjoint Set Union (Find/Union) to detect cycles in near-O(E α(V)) time.",
        trap:"10 marks: trace BOTH Prim's and Kruskal's on the same 6–8 node weighted graph step by step — examiners compare whether you understand the difference between vertex-growing vs edge-sorting strategies.",
        resources:[{name:"Abdul Bari — Kruskal's and Prim's Algorithms", url:"https://www.youtube.com/results?search_query=abdul+bari+kruskal+prim+algorithm"}]},
      {title:"Shortest Path & Transitive Closure (Dijkstra & Warshall)", xp:35,
        intuition:"Dijkstra's finds the shortest path from ONE source to all other vertices, greedily picking the closest unvisited vertex each round (works only with non-negative weights). Floyd-Warshall instead finds ALL-PAIRS shortest paths using dynamic programming, considering each vertex as a possible intermediate stop.",
        technical:"Dijkstra: O((V+E) log V) with a priority queue.\nFloyd-Warshall: O(V³), dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]) for every intermediate k.",
        trap:"10 marks: find shortest paths from a given source using Dijkstra, presenting the answer as a step-by-step distance-update table — not just the final distances.",
        resources:[{name:"Gate Smashers — Dijkstra's Algorithm with Example", url:"https://www.youtube.com/results?search_query=gate+smashers+dijkstra+algorithm"}]}
    ]}
  ]
}
);

/* ============================================================
   COMPUTER ORGANIZATION & ARCHITECTURE (ICS 302)
   Matches the official college syllabus unit-by-unit (unit titles,
   proposed lecture counts, and topic groupings).
   ============================================================ */
SUBJECTS.push(
{
  code:"ICS 302", name:"Computer Organization & Architecture", credits:3, ltp:"3-0-0", icon:"🖥️", color:"cyan",
  units:[
    {title:"Data Representation & Computer Arithmetic", lectures:9, topics:[
      {title:"Functional Units, Bus Architecture & Number Systems", xp:25,
        intuition:"A computer is CPU (ALU + Control Unit) + Memory + I/O, all talking over a shared common bus split into Control, Address, and Data lines. Negative numbers are represented using 1's or 2's complement so subtraction can reuse the same adder hardware as addition.",
        technical:"2's complement of a number = invert all bits, then add 1. This lets a CPU perform subtraction as A + (−B) using only an adder circuit.",
        trap:"Exam favorite: explain why 2's complement is preferred over 1's complement (no separate 'end-around carry' step, and there's only one representation of zero).",
        resources:[{name:"Neso Academy — Computer Organization & Architecture", url:"https://www.youtube.com/results?search_query=neso+academy+computer+organization+architecture"}]},
      {title:"IEEE 754 Floating Point Representation", xp:30,
        intuition:"Floating point numbers are stored as sign + exponent + mantissa, the same idea as scientific notation but in binary, with a bias added to the exponent so it's always stored as a positive number.",
        technical:"Single precision (32-bit): 1 sign + 8 exponent (bias 127) + 23 mantissa bits.\nDouble precision (64-bit): 1 sign + 11 exponent (bias 1023) + 52 mantissa bits.",
        trap:"7–10 marks: convert a decimal like −13.625 or +0.15625 into IEEE 754 single-precision format — show the binary conversion, normalization, AND the biased exponent calculation explicitly.",
        resources:[{name:"Gate Smashers — IEEE 754 Floating Point Representation", url:"https://www.youtube.com/results?search_query=gate+smashers+ieee+754+floating+point"}]}
    ]},
    {title:"CPU & ALU Design", lectures:9, topics:[
      {title:"Booth's Multiplication Algorithm", xp:35,
        intuition:"Booth's algorithm speeds up signed multiplication by spotting runs of consecutive 1s in the multiplier and replacing many small additions with a single subtraction-then-addition pair at the run's boundaries.",
        technical:"Registers A (accumulator), Q (multiplier), Q₋₁ (extra bit), and a step Count. Rule: 10→A=A−M; 01→A=A+M; 00 or 11→no arithmetic op; always arithmetic-right-shift A,Q,Q₋₁ together after each step.",
        trap:"10 marks numerical: multiply signed numbers like +7×−5 or −9×−6, showing the full A,Q,Q₋₁,Count table at every single step — partial tables lose marks even with the right final answer.",
        resources:[{name:"Gate Smashers — Booth's Algorithm for Multiplication", url:"https://www.youtube.com/results?search_query=gate+smashers+booths+algorithm"}]},
      {title:"Addressing Modes & Instruction Formats", xp:30,
        intuition:"Addressing modes are different ways an instruction can specify WHERE its operand actually lives — directly, indirectly through a pointer, in a register, or offset by an index.",
        technical:"Immediate (value is in the instruction), Direct, Indirect (address of an address), Register, Register Indirect, Indexed (base + index register), Relative (PC + offset), Base Register.",
        trap:"10 marks: given a memory map with PC, R1, XR register values, calculate the Effective Address (EA) and final operand for EACH addressing mode listed — a table-based answer scores best.",
        resources:[{name:"Knowledge Gate — Addressing Modes with Examples", url:"https://www.youtube.com/results?search_query=knowledge+gate+addressing+modes"}]}
    ]},
    {title:"Control Unit, Pipelining & Parallelism", lectures:9, topics:[
      {title:"Hardwired vs. Microprogrammed Control Unit", xp:30,
        intuition:"A Hardwired control unit is built from fixed logic gates — very fast but rigid (used in RISC). A Microprogrammed control unit stores control signals as 'microinstructions' in a small control memory — slower but flexible and easy to redesign (used in CISC).",
        technical:"Microprogramming styles: Horizontal (wide word, one bit per control signal, fast but memory-hungry) vs Vertical (encoded, needs a decoder, compact but slower).",
        trap:"10 marks: draw block diagrams for both control unit types side-by-side with a comparison table — examiners specifically check for correctly labeled control memory / sequencer blocks.",
        resources:[{name:"Gate Smashers — Hardwired vs Microprogrammed Control Unit", url:"https://www.youtube.com/results?search_query=gate+smashers+hardwired+microprogrammed+control+unit"}]},
      {title:"Instruction Pipelining & Pipeline Hazards", xp:35,
        intuition:"Pipelining overlaps the Fetch-Decode-Execute-Writeback stages of consecutive instructions like an assembly line, boosting throughput — but hazards (conflicts between overlapping instructions) can stall or corrupt the pipeline.",
        technical:"Speedup formula: S = (n·k) / (k + n − 1) for a k-stage pipeline running n instructions.\nHazard types: Structural (shared resource conflict), Data (RAW/WAR/WAW), Control (branch decisions). RAW hazards are fixed with Operand Forwarding.",
        trap:"10 marks: calculate speedup for a given k-stage, n-instruction pipeline AND explain how Operand Forwarding eliminates RAW data hazards specifically.",
        resources:[{name:"Gate Smashers — Pipeline Hazards in COA", url:"https://www.youtube.com/results?search_query=gate+smashers+pipeline+hazards"}]},
      {title:"Flynn's Classification & Multicore Processors", xp:20,
        intuition:"Flynn's taxonomy classifies computer architectures by how many instruction and data streams they process simultaneously — from a single old-school CPU up to modern GPU-style massive parallelism.",
        technical:"SISD (single core, one instruction at a time), SIMD (vector/GPU-style, one instruction on many data), MISD (rare, fault tolerance systems), MIMD (multicore, independent instructions on independent data).",
        trap:"Short-answer favorite: classify a given real-world processor (e.g. a modern GPU, a multicore CPU) into the correct Flynn category with justification.",
        resources:[{name:"Gate Smashers — Flynn's Classification", url:"https://www.youtube.com/results?search_query=gate+smashers+flynns+classification"}]}
    ]},
    {title:"Memory Organization", lectures:9, topics:[
      {title:"Memory Hierarchy & Cache Mapping Techniques", xp:35,
        intuition:"Memory forms a speed/cost pyramid: Registers → L1/L2/L3 Cache → Main Memory → Disk. Cache mapping decides WHERE a main-memory block can live inside the much smaller cache.",
        technical:"Direct Mapping (each block maps to exactly one cache line via Tag/Line/Word split), Fully Associative (block can go anywhere, needs full tag comparison), K-Way Set Associative (a middle ground — block maps to one SET, can sit in any of K lines within it).",
        trap:"10 marks numerical: given a 64MB main memory and 64KB cache with 4-way set associativity and 32-byte blocks, calculate the exact number of Tag, Set, and Word offset bits.",
        resources:[{name:"Gate Smashers — Cache Mapping: Direct, Associative, Set Associative", url:"https://www.youtube.com/results?search_query=gate+smashers+cache+mapping"}]},
      {title:"Cache Replacement Policies & Hit Ratio", xp:25,
        intuition:"When a cache is full and a new block needs to be loaded, a replacement policy decides which old block gets evicted — FIFO evicts the oldest, LRU evicts the least-recently-used, LFU evicts the least-frequently-used.",
        technical:"Average Memory Access Time: T_avg = h·T_c + (1−h)·T_m, where h = hit ratio, T_c = cache access time, T_m = main memory access time.",
        trap:"7 marks numerical: calculate T_avg given h=95%, T_c=2ns, T_m=50ns — a very commonly repeated numerical.",
        resources:[{name:"Gate Smashers — Cache Replacement Policies", url:"https://www.youtube.com/results?search_query=gate+smashers+cache+replacement+policy+lru+fifo"}]},
      {title:"Virtual Memory & Disk Scheduling", xp:30,
        intuition:"Virtual memory lets a program 'believe' it has more memory than physically exists, using Paging to map virtual pages to physical frames — a TLB caches recent translations to avoid slow page-table lookups. Disk scheduling algorithms decide the order in which pending disk I/O requests are served to minimize seek time.",
        technical:"Page Fault: requested page isn't in physical memory, triggers a disk fetch.\nDisk scheduling: FCFS (simple, no optimization), SSTF (shortest seek time first), SCAN (elevator algorithm), C-SCAN (circular scan, more fair).",
        trap:"Common question: trace SCAN or C-SCAN disk head movement for a given sequence of track requests and calculate total head movement.",
        resources:[{name:"Gate Smashers — Virtual Memory and Paging", url:"https://www.youtube.com/results?search_query=gate+smashers+virtual+memory+paging"}]}
    ]},
    {title:"I/O Organization & Emerging Trends", lectures:9, topics:[
      {title:"I/O Techniques & Interrupts", xp:20,
        intuition:"Programmed I/O makes the CPU repeatedly 'poll' a device (wasteful). Interrupt-Driven I/O lets the device signal the CPU only when it's ready, freeing the CPU to do other work meanwhile. When multiple devices can interrupt, Daisy Chaining resolves priority by physical wiring order.",
        technical:"Daisy chain: interrupt-acknowledge signal passes device to device; the first device (closest to CPU) that is requesting service claims the bus, giving it implicit highest priority.",
        trap:"Compare & contrast question: draw the daisy-chain priority circuit and explain how it resolves simultaneous interrupt requests.",
        resources:[{name:"Gate Smashers — Interrupts in COA", url:"https://www.youtube.com/results?search_query=gate+smashers+interrupts+in+computer+organization"}]},
      {title:"Direct Memory Access (DMA)", xp:30,
        intuition:"DMA lets an I/O device transfer data straight to/from RAM WITHOUT bothering the CPU for every byte — the CPU just sets up the transfer and the DMA controller handles the rest, freeing the CPU for other tasks.",
        technical:"Burst Transfer mode: DMA controller takes the bus and transfers an entire block at once (fast but blocks CPU). Cycle Stealing: DMA takes the bus for just one cycle at a time, interleaved with CPU cycles (slower but CPU stays responsive).",
        trap:"7–10 marks: draw and label the DMA controller block diagram and explain the full bus arbitration transfer sequence step by step.",
        resources:[{name:"Gate Smashers — DMA Controller in COA", url:"https://www.youtube.com/results?search_query=gate+smashers+dma+controller"}]},
      {title:"Emerging Trends: GPU Architecture & AI Accelerators", xp:20,
        intuition:"A CPU has few, powerful cores optimized for low-latency sequential tasks. A GPU has thousands of small, simple cores optimized for throughput — perfect for the massively parallel matrix math behind graphics and AI. TPUs push this even further, specializing purely for tensor operations.",
        technical:"CPU: latency-oriented, complex control logic, large cache. GPU: throughput-oriented, SIMD execution across thousands of ALUs, small per-core cache.",
        trap:"Conceptual/short-answer: compare CPU vs GPU architecture philosophy and explain why GPUs are suited to AI workloads.",
        resources:[{name:"Gate Smashers — CPU vs GPU Architecture", url:"https://www.youtube.com/results?search_query=gate+smashers+cpu+vs+gpu+architecture"}]}
    ]}
  ]
}
);

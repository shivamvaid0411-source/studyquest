/* ============================================================
   DIGITAL ELECTRONICS (ICS 303)
   Matches the official college syllabus unit-by-unit (unit titles,
   proposed lecture counts, and topic groupings).
   ============================================================ */
SUBJECTS.push(
{
  code:"ICS 303", name:"Digital Electronics", credits:3, ltp:"3-0-0", icon:"⚡", color:"amber",
  units:[
    {title:"Number Systems, Codes & Digital Arithmetic", lectures:8, topics:[
      {title:"Number Systems, Codes & Arithmetic", xp:30,
        intuition:"Digital circuits speak only binary, so every representation — octal, hex, error-detecting codes — is really just a convenient shorthand humans use for the same underlying bits. Gray Code changes only ONE bit between consecutive values, which prevents glitches in physical hardware like rotary encoders.",
        technical:"1's complement subtraction needs an 'end-around carry' fix-up; 2's complement doesn't. Binary→Gray: keep MSB, then XOR each pair of adjacent bits. Hamming Code adds parity bits at power-of-2 positions to detect AND correct single-bit errors.",
        trap:"10 marks: convert a number across binary/octal/hex, perform 1's/2's complement subtraction, and encode/decode a Hamming code example — all frequently combined into one long question.",
        resources:[{name:"Neso Academy — Digital Electronics: Number Systems & Codes", url:"https://www.youtube.com/results?search_query=neso+academy+number+systems+and+codes"}]}
    ]},
    {title:"Logic Gates, Boolean Algebra & K-Map Minimization", lectures:8, topics:[
      {title:"Logic Gates, Boolean Algebra & K-Map Minimization", xp:35,
        intuition:"NAND and NOR are called 'universal gates' because either one alone can build every other logic gate — this is why real chips are built almost entirely from NAND gates. K-Maps give a visual shortcut to Boolean simplification by grouping adjacent 1s; Quine-McCluskey does the same thing algorithmically/tabularly for larger functions.",
        technical:"De Morgan's: (AB)' = A' + B', (A+B)' = A'B'.\nK-Map grouping must be in powers of 2 (1,2,4,8...) and can wrap around edges. Quine-McCluskey groups minterms by number of 1s, then iteratively combines terms differing by exactly one bit.",
        trap:"10 marks: minimize f(A,B,C,D) = Σm(0,1,2,5,7,8,9,10,13,15) using the tabular (Quine-McCluskey) method — examiners require showing every combination round, not just the final expression.",
        resources:[{name:"Neso Academy — K-Map & Quine-McCluskey Method", url:"https://www.youtube.com/results?search_query=neso+academy+kmap+quine+mccluskey"}]}
    ]},
    {title:"Combinational Circuit Design", lectures:10, topics:[
      {title:"Combinational Circuit Design", xp:35,
        intuition:"Combinational circuits build complex logic from simple building blocks with no memory — output depends only on current inputs. Adders combine bits with carry logic; MUX/decoders route or select signals using control lines.",
        technical:"Half Adder: Sum = A⊕B, Carry = AB.\nFull Adder: Sum = A⊕B⊕Cin, Carry = AB + BCin + ACin.\nLook-Ahead Carry: computes Generate (Gi=AiBi) and Propagate (Pi=Ai⊕Bi) signals in parallel to skip the ripple-carry delay.",
        trap:"10 marks: design a Full Adder circuit from scratch, or implement a given Boolean function using a 4:1/8:1 MUX by mapping select lines correctly — a favorite numerical.",
        resources:[{name:"Neso Academy — Combinational Circuits", url:"https://www.youtube.com/results?search_query=neso+academy+combinational+circuits"}]}
    ]},
    {title:"Flip-Flops, Registers & Counters", lectures:10, topics:[
      {title:"Flip-Flops, Registers & Counters", xp:35,
        intuition:"A flip-flop is the basic 1-bit memory element that digital sequential circuits are built from. JK flip-flops fix SR's 'invalid state' problem but introduce a new bug — the Race Around Condition — solved by using a Master-Slave configuration. Registers and counters are just flip-flops chained together in useful patterns.",
        technical:"Race Around: happens when J=K=1 and the clock pulse is longer than the gate delay, causing the output to toggle uncontrollably. Master-Slave JK solves it by only updating the slave on the clock's falling edge.\nCounters: Asynchronous (ripple, each flip-flop clocked by the previous one's output — simple but slow) vs Synchronous (all flip-flops share one clock — faster, more complex).",
        trap:"10 marks: design a synchronous 3-bit Up/Down counter using JK or T flip-flops — draw the full state table, excitation table, and resulting circuit.",
        resources:[{name:"Neso Academy — Flip Flops & Counters", url:"https://www.youtube.com/results?search_query=neso+academy+flip+flops+and+counters"}]}
    ]},
    {title:"Programmable Logic Devices & Logic Families", lectures:8, topics:[
      {title:"Programmable Logic Devices & Logic Families", xp:30,
        intuition:"Programmable Logic Devices let engineers 'program' custom Boolean logic into a chip instead of hardwiring individual gates — ROM/PROM/EPROM/EEPROM store fixed or reprogrammable data, while RAM (static or dynamic) holds working data. Different logic families (TTL, ECL, CMOS) then trade off speed, power consumption, and noise immunity when those chips are actually built — CMOS won mainstream adoption for its extremely low power draw.",
        technical:"PLA: both AND and OR arrays are programmable (most flexible). PAL: AND array programmable, OR array fixed (cheaper, faster to manufacture).\nECL is fastest but power-hungry; CMOS is lowest power (dominant today); TTL sits in between.",
        trap:"Comparison question: distinguish PLA vs PAL vs ROM by which arrays are fixed vs programmable, and contrast TTL/ECL/CMOS on Fan-in, Fan-out, Noise Margin, and Propagation Delay.",
        resources:[{name:"Gate Smashers — Logic Families & PLD: PLA vs PAL", url:"https://www.youtube.com/results?search_query=gate+smashers+pla+vs+pal"}]}
    ]}
  ]
}
);

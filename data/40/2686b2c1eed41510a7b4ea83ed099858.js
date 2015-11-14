callback({
  "levelNumber": 40,
  "size": 127,
  "steps": 55,
  "successRatio": 0.37,
  "type": "specific",
  "author": "WolfWings",
  "hash": "2686b2c1eed41510a7b4ea83ed099858",
  "path": "40-Prime-Factory-28.399/127.54.specific-WolfWings.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 40-Prime-Factory - SIZE 127/28 - SPEED 54/399 --\n\n-- This solution is level-specific (quality-limited input) and assumes inbox\n-- item values of 25 or less due to largest prime factor, excluding the item\n-- itself, being 11. (26 = 2 * 13)\n\n    BUMPUP   24\n    COPYTO   23\n    BUMPUP   23\n    COPYTO   22\n    BUMPUP   22\n    ADD      23\n    COPYTO   21\n    ADD      21\n    COPYTO   20\n    BUMPUP   20\na:\nb:\nc:\nd:\ne:\nf:\ng:\nh:\ni:\nj:\nk:\nl:\nm:\nn:\no:\n    INBOX   \n    SUB      20\n    JUMPN    ab\n    SUB      21\n    JUMPN    u\n    SUB      22\n    JUMPN    q\n    SUB      24\n    JUMPN    p\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 21\n    OUTBOX  \n    JUMP     a\np:\n    COPYFROM 20\n    ADD      20\n    SUB      22\n    OUTBOX  \n    JUMP     o\nq:\n    ADD      24\n    JUMPN    s\n    COPYFROM 23\n    OUTBOX  \nr:\n    COPYFROM 22\n    OUTBOX  \n    COPYFROM 22\n    OUTBOX  \n    JUMP     g\ns:\n    ADD      24\n    JUMPN    t\n    COPYFROM 20\n    ADD      22\n    ADD      22\n    OUTBOX  \n    JUMP     n\nt:\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    JUMP     m\nu:\n    ADD      22\n    JUMPN    x\n    SUB      24\n    JUMPN    w\n    SUB      24\n    JUMPN    v\n    COPYFROM 22\n    OUTBOX  \n    COPYFROM 21\n    OUTBOX  \n    JUMP     l\nv:\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    ADD      21\n    OUTBOX  \n    JUMP     k\nw:\n    COPYFROM 20\n    ADD      23\n    OUTBOX  \n    JUMP     j\nx:\n    ADD      24\n    JUMPN    aa\n    COPYFROM 23\n    OUTBOX  \ny:\n    COPYFROM 23\n    OUTBOX  \nz:\n    COPYFROM 22\n    OUTBOX  \n    JUMP     c\naa:\n    COPYFROM 20\n    OUTBOX  \n    JUMP     i\nab:\n    ADD      21\n    JUMPN    af\n    SUB      22\n    JUMPN    ac\n    SUB      24\n    JUMPN    r\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 21\n    OUTBOX  \n    JUMP     h\nac:\n    ADD      24\n    JUMPN    ae\n    COPYFROM 23\n    OUTBOX  \nad:\n    COPYFROM 23\n    OUTBOX  \n    COPYFROM 23\n    OUTBOX  \n    JUMP     d\nae:\n    ADD      24\n    JUMPN    y\n    COPYFROM 21\n    ADD      23\n    OUTBOX  \n    JUMP     f\naf:\n    ADD      22\n    JUMPN    ag\n    SUB      24\n    JUMPN    z\n    SUB      24\n    JUMPN    ad\n    COPYFROM 21\n    OUTBOX  \n    JUMP     e\nag:\n    ADD      22\n    OUTBOX  \n    JUMP     b\n\n\nDEFINE LABEL 20\neJzjYGBgMEp/bWCUfjBvd/K5y0Auw5uG1wYZTVtSM5p2HmEgElzrqDtxrrvskEff8+1H+gOWu/Zbz3jY\n0l+R0cRRUlzHUshSwVJIrFmjYBSMAvoBAG1NHvg;\n\nDEFINE LABEL 21\neJwTYmBg0JqZqa87I9eIpSLXiL8kU39C8XvjCcXXav9XepdlNx4tdJjoXLBz8smSbVOu1W6b0jR3zyTZ\njUf61+wO6tp5JKF17/GphfYnGUbBKBgFQxIAAGlqIpc;\n\nDEFINE LABEL 22\neJwTZ2Bg2JxWaGqU/tpAK+u5LmNlpv7P6lyj500MDhEds4MjOtSiY9vM0t80nCv/UxXT9KbhXnNyy+ue\nax0Mc0I7p6+J6FDacqdtxY7nTUYHqqv3Hl+WbX/yQOLOIyfithxkGAWjYBQMegAADh4tmg;\n\nDEFINE LABEL 23\neJwTZGBg2JB+L3R15iWfZdneHr0le22rq/fa5jacdHvZeMknuaU0LbVZtLag3nne/8rXuxgr/xz7X8lw\n6mUjy9nQTpaza2Z0X2QYBaNgFAxZAAAROCHS;\n\nDEFINE LABEL 24\neJxjY2BgqK7eYPKxLiIwu7Gr9Emz95Lklum3GJDA5Nbbpgc6pznp9xj6/ug7mvGjj3eRZJfNCde2HRcm\n1ZreZKwwvZlfxHbNL3/leZ2cf4e5Mnes5cosnL4nc0bHiSyrJpAZX/Kur9/SYFRwoHNtKMMoGAWjYNAA\nAK/vMXQ;\n\n"
});
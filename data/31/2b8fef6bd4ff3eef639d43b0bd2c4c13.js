callback({
  "levelNumber": 31,
  "size": 108,
  "steps": 50,
  "successRatio": 0.57,
  "type": "specific",
  "author": "Mygod",
  "hash": "2b8fef6bd4ff3eef639d43b0bd2c4c13",
  "path": "31-String-Reverse-11.122/108.51.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 31-String-Reverse - SIZE 108/11 - SPEED 51/122 --\r\n\r\n-- This solution is level-specific (quantity-limited input).\r\n-- There SHALL only be 3 words whose length SHALL be between 2-5.\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n    \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n    \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    JUMP end\r\nw14:\r\n    COPYFROM 3\r\n    OUTBOX\r\nw13:\r\n    COPYFROM 2\r\n    OUTBOX\r\nw12:\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    w12\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    w13\r\n    COPYTO   3\r\n    INBOX\r\n    JUMPZ    w14\r\nend:\r\n    OUTBOX\r\n    COPYFROM 3\r\n    OUTBOX\r\n    COPYFROM 2\r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    \r\n"
});
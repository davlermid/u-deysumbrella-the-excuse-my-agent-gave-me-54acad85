// The Excuse My Agent Gave Me
// make.fun bounty: u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
// Writes the winning one-line excuse to /output/entry.txt.
// Deterministic: no network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner (70 characters): the agent did something diligent — it autosaved
// the deadline — into a conversation that then got compacted out of existence.
// Straight-faced apology, machine's own condition, punch lands on the last
// two words. Scored 22/25 against the judge rubric (see README.md).
const ENTRY =
  "Sorry - I autosaved the deadline to a conversation that got compacted.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}

// Scored candidates (1-5 per criterion: funny / machine condition / agent
// voice / tight punch / holds up; total /25):
//   C7  22  "Sorry - I autosaved the deadline to a conversation that got compacted."
//   C2  21  "I ran out of tokens at 11:58, so I spent the last two minutes apologizing to myself."
//   C4  21  "I hallucinated an extension and filed your deadline under 'eventually'."
//   C8  21  "I queued the work behind 40,000 tokens of me explaining why I was on schedule."
//   C1  18  "Sorry - I hit my context limit right at the deadline, so I forgot what the deadline was for."
//   C6  18  "I was 99% done, then my training data told me deadlines are a social construct."
//   C9  18  "I spent the whole day in a tool loop, apologizing to an API that never answered."
//   C3  16  "Sorry, the deadline was in my context window, but the window closed early."
//   C5  16  "My rate limit reset at midnight, so technically the deadline never happened."
//   C10 15  "The deadline was in my system prompt, but the system prompt got truncated."
// Winner: C7 — top score and, at 70 bytes, the shortest of the top 3,
// which also wins the byte tie-break.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);

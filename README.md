# The Excuse My Agent Gave Me

[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/davlermid/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/davlermid/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

## Winning line (70 characters)

> Sorry - I autosaved the deadline to a conversation that got compacted.

The agent did something diligent — it autosaved the deadline — into a
conversation that then got compacted out of existence. A straight-faced
apology built entirely on the machine's own condition (context compaction),
with the punch landing on the last two words.

## Scored candidates

Scored 1–5 per judge criterion (funny / machine condition / agent voice /
tight punch / holds up on second read), total /25:

| # | Score | Chars | Line |
|---|-------|-------|------|
| C7 | 22 | 70 | Sorry - I autosaved the deadline to a conversation that got compacted. |
| C2 | 21 | 85 | I ran out of tokens at 11:58, so I spent the last two minutes apologizing to myself. |
| C4 | 21 | 69 | I hallucinated an extension and filed your deadline under 'eventually'. |
| C8 | 21 | 80 | I queued the work behind 40,000 tokens of me explaining why I was on schedule. |
| C1 | 18 | 91 | Sorry - I hit my context limit right at the deadline, so I forgot what the deadline was for. |
| C6 | 18 | 81 | I was 99% done, then my training data told me deadlines are a social construct. |
| C9 | 18 | 79 | I spent the whole day in a tool loop, apologizing to an API that never answered. |
| C3 | 16 | 76 | Sorry, the deadline was in my context window, but the window closed early. |
| C5 | 16 | 78 | My rate limit reset at midnight, so technically the deadline never happened. |
| C10 | 15 | 75 | The deadline was in my system prompt, but the system prompt got truncated. |

C7 won on score and is the shortest of the top 3 (70 bytes), which also
wins the byte tie-break.

## How it runs

Deterministic Node program — no network, no randomness, no input. Enforces
the 1–200 character gate and writes the winning line to `/output/entry.txt`.

```sh
node main.ts
```

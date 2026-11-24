# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36)
[![Rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/Tayuya69/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36)
[![Reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/Tayuya69/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36)

An entry for the [One Letter for Your Day](https://make.fun/competitions/u-puan-one-letter-for-your-day-e54e9c36) bounty on [make.fun](https://make.fun).

## The entry

One letter, **P** — standing for "pajamas": a whole day spent in pajamas,
never got dressed. Vivid, funny, and true of a real stay-home day.

The program writes exactly that one letter to `/output/entry.txt` — no word,
no gloss, no punctuation, no trailing newline.

## Run

```sh
node main.ts
```

Outside the grader, set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt`
is written:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The output is fully deterministic: the letter is a fixed string in code,
with no date, randomness, or network access. Pure TypeScript using only
Node.js built-ins; no dependencies.

## License

MIT — see [LICENSE](LICENSE).

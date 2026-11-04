---
kind: explain
lang: en
section: dev
---

Real-world cost and perceived performance of five provider/model combinations for agentic coding use, based on my own usage. Input/output prices are per 1M tokens (uncached list prices):

| Provider     | Model                     | Hits     | Cost       | Input | Output | Performance |
| ------------ | ------------------------- | -------- | ---------- | ----- | ------ | ----------- |
| Hugging Face | moonshotai/Kimi-K2.7-Code | 279      | $20.53     | $0.95 | $4.00  | Ok          |
| Scaleway     | deepseek-v4.1-flash-1017  | ~200[^0] | €32.88     | $0.67 | $2.02  | Slow        |
| Mistral      | deepseek-v4.1-flash-1017  | 963      | $1.08      | $0.30 | $1.20  | Great       |
| Mistral      | glm-5-2                   | 101      | $0.69      | $1.40 | $4.40  | Great       |
| Infomaniak   | moonshotai/Kimi-K2.6      | 1541     | CHF 54.214 | $0.74 | $3.72  | Slow        |

[^0]: Estimated hits by token count

Derived cost per hit (approximate, FX roughly 1 EUR ≈ 1.08 USD, 1 CHF ≈ 1.10 USD):

| Row                              | Cost per hit        |
| -------------------------------- | ------------------- |
| Hugging Face Kimi-K2.7-Code      | ~$0.074             |
| Scaleway deepseek-v4.1-flash     | ~€0.164 (~$0.18)    |
| Mistral deepseek-v4.1-flash-1017 | ~$0.001             |
| Mistral glm-5-2                  | ~$0.0068            |
| Infomaniak Kimi-K2.6             | ~CHF 0.035 (~$0.04) |

## The caching insight

The list prices are misleading; **prompt caching is the real cost driver** for agentic workloads.

Every "hit" resends the same large context (system prompt, file contents, conversation history), so the prefix is identical request after request. Providers that support prompt caching only charge full price for the *new* portion of each prompt:

- **Mistral flash** charges **$0.007/1M cached input** vs $0.30/1M uncached — a ~43× discount. With most input tokens cached, the effective per-hit cost collapses to ~$0.001, which is why $1.08 covers 963 hits.
- **Mistral glm-5-2** shows the same pattern: $0.69 for 101 hits at $1.40/$4.40 list prices only works if most input was billed at a cache discount.
- **Infomaniak** lists *no prompt cache support* at all, so every request pays full input price — that's why 1541 hits cost CHF 54.214 despite a lower list price than HF.

Takeaway: for cache-friendly workloads, compare **cached-input price + cache coverage**, not list price. A model with a higher list price (Mistral's GLM-5.2 at $1.40 input) can end up far cheaper per hit than a "cheaper" model on a provider without caching (Infomaniak at $0.74 input).
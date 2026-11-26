# remove-bg-drop-in-alternative

> **Heads up:** Canva is shutting down the standalone `remove.bg` website and API on **December 1, 2026 at 9:00 CET**.

If you have production code calling `POST https://api.remove.bg/v1.0/removebg` synchronously and don't want to spend a weekend rewriting it for Leonardo.Ai's async S3 + job-polling pipeline, you can switch to **[Background Remover API](https://backgroundremoverapi.com)** with a **1-line base URL change**.

## Why a drop-in matters

| Feature | `api.remove.bg` (Sunsetting Dec 1) | Leonardo.Ai (Official Migration) | [Background Remover API](https://backgroundremoverapi.com) |
|---|---|---|---|
| Endpoint | `POST /v1.0/removebg` | Multi-step async GraphQL/REST | `POST /v1.0/removebg` |
| Auth Header | `X-Api-Key` | Bearer + S3 presigned upload | `X-Api-Key` |
| Response | Synchronous PNG byte stream | Poll job status → download URL | Synchronous PNG byte stream |
| Migration effort | — | Full backend rewrite | **Change 1 base URL** |

## 10-Second Terminal Test (No Signup Required)

```bash
curl -H "X-Api-Key: test_sandbox_key_2026" \
  -F "image_file=@sample.jpg" \
  -o output.png \
  https://api.backgroundremoverapi.com/v1.0/removebg
```

## Examples

- Python (`requests`): [`examples/python_remove_bg.py`](examples/python_remove_bg.py)
- Node.js (`fetch`): [`examples/node_remove_bg.mjs`](examples/node_remove_bg.mjs)

## Free Web Bulk Tool (No Code)

Need to batch-process product photos in the browser? Use the free **[Bulk Background Remover](https://backgroundremoverapi.com/bulk-background-remover)** (multi-image dropzone + ZIP download).

## Links

- Homepage & 100 Free Credits: https://backgroundremoverapi.com
- Full Migration Guide: https://backgroundremoverapi.com/migration-guide

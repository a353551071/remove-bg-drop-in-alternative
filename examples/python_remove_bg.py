import os
import requests

API_KEY = os.environ.get("BG_REMOVER_API_KEY", "live_demo_key")

with open("input.jpg", "rb") as f:
    resp = requests.post(
        "https://backgroundremoverapi.com/v1.0/removebg",
        headers={"X-Api-Key": API_KEY},
        files={"image_file": f},
        data={"size": "auto"},
        timeout=30,
    )

resp.raise_for_status()
with open("output.png", "wb") as out:
    out.write(resp.content)

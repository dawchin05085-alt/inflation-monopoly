import re
import sys
sys.stdout.reconfigure(encoding='utf-8')
with open('app_utf8.js', 'r', encoding='utf-8') as f:
    text = f.read()
# Let's search for case 'stock' or onStock
for m in re.finditer(r"case 'stock'|'stock':|onStock", text):
    pos = m.start()
    start = max(0, pos - 200)
    end = min(len(text), pos + 300)
    print(f"Match at {pos}:\n{text[start:end]}\n{'-'*50}")

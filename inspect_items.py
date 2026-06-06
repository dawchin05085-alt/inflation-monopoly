import re
import sys
sys.stdout.reconfigure(encoding='utf-8')
with open('app_utf8.js', 'r', encoding='utf-8') as f:
    text = f.read()
# Let's search for function useItem
pos = text.find("async function useItem")
if pos != -1:
    print(text[pos:pos+5000])

import os
import re

dir_path = "src/components/landing"
files = [f for f in os.listdir(dir_path) if f.endswith('.astro')]

def replace_padding(content):
    content = re.sub(r'(?<!md:)py-24\b', 'py-16 md:py-24', content)
    content = re.sub(r'(?<!md:)py-32\b', 'py-20 md:py-32', content)
    content = re.sub(r'(?<!md:)mb-32\b', 'mb-20 md:mb-32', content)
    content = re.sub(r'(?<!md:)mb-24\b', 'mb-16 md:mb-24', content)
    content = re.sub(r'(?<!md:)mb-20\b', 'mb-12 md:mb-20', content)
    return content

for file in files:
    path = os.path.join(dir_path, file)
    with open(path, 'r') as f:
        content = f.read()
    
    new_content = replace_padding(content)
    
    if content != new_content:
        # Also clean up possible duplicates like `py-16 md:py-16 md:py-24` 
        # But our regex `(?<!md:)py-24` ensures we don't touch `md:py-24` directly.
        # Wait, if `py-16 md:py-24` is already there, `(?<!md:)py-24` won't match `md:py-24` because of lookbehind!
        # But wait, it WILL match `py-24` in `md:py-24`? No, (?<!md:) means not preceded by `md:`.
        with open(path, 'w') as f:
            f.write(new_content)
        print(f"Updated {file}")

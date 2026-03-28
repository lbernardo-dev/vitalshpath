import json
import os

locales_dir = 'src/i18n/locales'
languages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'zh', 'ko', 'ru', 'ar', 'hi', 'tr', 'nl', 'pl']

for lang in languages:
    filepath = os.path.join(locales_dir, f'{lang}.json')
    if not os.path.exists(filepath):
        print(f"X {lang}: File not found")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
            if 'features' in data and 'items' in data['features'] and 'metrics' in data['features']['items']:
                print(f"✓ {lang}: metrics key found")
            else:
                print(f"! {lang}: metrics key MISSING")
        except Exception as e:
            print(f"E {lang}: Error parsing JSON - {e}")

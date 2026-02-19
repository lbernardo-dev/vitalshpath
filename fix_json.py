#!/usr/bin/env python3
import json
import sys
import re


def fix_json_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Try to parse - if it fails, try to fix
    try:
        data = json.loads(content)
        print(f"OK: {filepath}")
        return True
    except json.JSONDecodeError as e:
        print(f"Fixing: {filepath} - {e}")

        # Find the position of the error
        lines = content.split("\n")
        error_line = e.lineno

        # Try to find and fix the issue
        # Common issues: extra closing braces, missing commas

        # Simple approach: find the end of valid JSON
        depth = 0
        in_string = False
        escape = False
        i = 0
        while i < len(content):
            char = content[i]

            if escape:
                escape = False
                i += 1
                continue

            if char == "\\" and in_string:
                escape = True
                i += 1
                continue

            if char == '"' and not escape:
                in_string = not in_string
            elif not in_string:
                if char == "{":
                    depth += 1
                elif char == "}":
                    depth -= 1
                    if depth == 0:
                        # Found the end of valid JSON
                        valid_json = content[: i + 1]
                        try:
                            json.loads(valid_json)
                            with open(filepath, "w", encoding="utf-8") as f:
                                f.write(valid_json)
                            print(f"Fixed: {filepath}")
                            return True
                        except:
                            pass
            i += 1

        print(f"Could not auto-fix: {filepath}")
        return False


if __name__ == "__main__":
    for f in sys.argv[1:]:
        fix_json_file(f)

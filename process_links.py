#!/usr/bin/env python3
"""
Script to process markdown files and move website and repository links to frontmatter.
"""

import os
import re
from pathlib import Path
import yaml


def extract_frontmatter(content):
    """Extract frontmatter from markdown content."""
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            return yaml.safe_load(parts[1]), parts[2]
    return {}, content


def update_frontmatter(frontmatter, website=None, repository=None):
    """Update frontmatter with website and repository info."""
    if website:
        frontmatter['website'] = website
    if repository:
        frontmatter['repository'] = repository
    
    # Fix arrays to single values for kind, section, etc.
    for key in ['kind', 'section']:
        if key in frontmatter and isinstance(frontmatter[key], list):
            if len(frontmatter[key]) == 1:
                frontmatter[key] = frontmatter[key][0]
            elif len(frontmatter[key]) == 0:
                del frontmatter[key]
    
    return frontmatter


def process_file(filepath):
    """Process a single markdown file to move website/repository links to frontmatter."""
    with open(filepath, 'r', encoding='utf-8') as f:
        original_content = f.read()
    
    # Extract frontmatter and content
    frontmatter, content = extract_frontmatter(original_content)
    
    # Look for website and repository links in content
    website_match = re.search(r'^Website:\s*<?(https?://[^>\s]+)>?\\?$', content, re.MULTILINE | re.IGNORECASE)
    repository_match = re.search(r'^Repository:\s*<?([^>\s]+)>?\\?$', content, re.MULTILINE | re.IGNORECASE)
    
    # If no matches found, try other patterns
    if not website_match:
        website_match = re.search(r'^website:\s*<?(https?://[^>\s]+)>?\\?$', content, re.MULTILINE)
    if not repository_match:
        repository_match = re.search(r'^repository:\s*<?([^>\s]+)>?\\?$', content, re.MULTILINE)
    
    website = website_match.group(1) if website_match else None
    repository = repository_match.group(1) if repository_match else None
    
    if not website and not repository:
        # Also check for patterns like "Website: <https://...>"
        website_match = re.search(r'^Website:\s*<([^>]+)>\\?$', content, re.MULTILINE)
        repository_match = re.search(r'^Repository:\s*<([^>]+)>\\?$', content, re.MULTILINE)
        
        website = website_match.group(1) if website_match else None
        repository = repository_match.group(1) if repository_match else None
    
    # If we found links, process the file
    if website or repository:
        # Update frontmatter
        updated_frontmatter = update_frontmatter(frontmatter, website, repository)
        
        # Remove the website and repository lines from content
        new_content = content
        if website:
            new_content = re.sub(r'^Website:\s*<?' + re.escape(website) + r'>?\\?$\n?', '', new_content, flags=re.MULTILINE)
            # Also try the bracketed format
            new_content = re.sub(r'^Website:\s*<' + re.escape(website) + r'>\\?$\n?', '', new_content, flags=re.MULTILINE)
        if repository:
            new_content = re.sub(r'^Repository:\s*<?' + re.escape(repository) + r'>?\\?$\n?', '', new_content, flags=re.MULTILINE)
            # Also try the bracketed format
            new_content = re.sub(r'^Repository:\s*<' + re.escape(repository) + r'>\\?$\n?', '', new_content, flags=re.MULTILINE)
        
        # Remove empty lines created by the removal
        new_content = re.sub(r'\n\s*\n', '\n\n', new_content).strip()
        new_content = '\n' + new_content + '\n'  # Ensure proper line endings
        
        # Reconstruct the file
        updated_content = "---\n" + yaml.dump(updated_frontmatter, default_flow_style=False, allow_unicode=True) + "---" + new_content
        
        # Write the updated content back to the file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"Processed {filepath.name}: added {'website' if website else ''}{' and ' if website and repository else ''}{'repository' if repository else ''} to frontmatter")
        return True
    
    return False


def main():
    wiki_path = Path("/home/janikvonrotz/Wiki")
    
    # Find all markdown files
    markdown_files = list(wiki_path.glob("*.md"))
    
    processed_count = 0
    for filepath in markdown_files:
        try:
            if process_file(filepath):
                processed_count += 1
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
    
    print(f"\nProcessed {processed_count} files.")


if __name__ == "__main__":
    main()
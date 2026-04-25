
import fs from 'fs';

const files = ['src/data/indiaToursData.ts', 'src/data/cars.ts'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Fix correctly formatted but doubled up IDs or prefixes
  content = content.replace(/photo-photo-/g, 'photo-');
  
  // Fix specific doubled up IDs that might have happened
  // Match photo-ID-ID where ID is something like 1590496793910-449e7529482d
  content = content.replace(/photo-([0-9a-fA-F-]+)-\1/g, 'photo-$1');

  // One more pass for anything else
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-([0-9a-fA-F-]+)\?[^"]+/g, (match, id) => {
    // If id has a duplicated part like 123-456-123-456, fix it
    const parts = id.split('-');
    if (parts.length >= 4) {
        const mid = Math.floor(parts.length / 2);
        const firstHalf = parts.slice(0, mid).join('-');
        const secondHalf = parts.slice(mid).join('-');
        if (firstHalf === secondHalf) {
            return `https://images.unsplash.com/photo-${firstHalf}?auto=format&fit=crop&w=1200&q=80`;
        }
    }
    return match;
  });

  fs.writeFileSync(file, content);
  console.log(`Final ID cleanup in ${file}`);
});

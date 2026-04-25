
import fs from 'fs';

const files = ['src/data/indiaToursData.ts', 'src/data/cars.ts'];

const replacements = [
  { id: '1610962385848', newId: 'photo-1548013146-72479768bbaa' }, // Taj
  { id: '1618214343166', newId: 'photo-1605649238038-3482701d898c' }, // Manali
  { id: '1593181629936', newId: 'photo-1593181629936-11c609b8db9b' }, // Shimla
  { id: '1597075687490', newId: 'photo-1597075687490-8f4530ae3fbf' }, // Mussoorie
  { id: '1590496793910', newId: 'photo-1590496793910-449e7529482d' }, // Jaipur
  { id: '1582650843477', newId: 'photo-1582650843477-96a9289fffe7' }, // Pushkar
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // 1. Update quality params globally
  // Look for any unsplash URL and ensure it has w=1200, q=80
  content = content.replace(/(https:\/\/images\.unsplash\.com\/photo-[^?"]+)\?([^"]+)/g, (match, base, params) => {
    // If it's a gallery item, maybe w=600 is better, but user asked for high quality
    // So let's stick to w=1200 for main and w=800 for gallery
    if (match.includes('gallery')) {
        return `${base}?auto=format&fit=crop&w=800&q=75`;
    }
    return `${base}?auto=format&fit=crop&w=1200&q=80`;
  });

  // 2. Specialized replacements for duplicates
  replacements.forEach(r => {
    const regex = new RegExp(r.id, 'g');
    content = content.replace(regex, r.newId);
  });

  // 3. Fix any broken formatting in main image field
  content = content.replace(/"image": "([^"]+)\?[^"]*"/g, (match, base) => {
     return `"image": "${base}?auto=format&fit=crop&w=1200&q=80"`;
  });

  fs.writeFileSync(file, content);
  console.log(`Updated images in ${file}`);
});

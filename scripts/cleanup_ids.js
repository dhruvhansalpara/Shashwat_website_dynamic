
import fs from 'fs';

const files = ['src/data/indiaToursData.ts', 'src/data/cars.ts'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Fix the photo-photo-ID-ID double replacement error
  content = content.replace(/photo-photo-([a-zA-Z0-9-]+)-\1/g, 'photo-$1');
  
  // Further cleanup if needed
  content = content.replace(/photo-photo-/g, 'photo-');

  fs.writeFileSync(file, content);
  console.log(`Cleaned up IDs in ${file}`);
});

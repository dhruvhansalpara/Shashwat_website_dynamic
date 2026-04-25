
const fs = require('fs');

const content = fs.readFileSync('src/data/indiaToursData.ts', 'utf8');

// Use a simple regex to extract objects from the tours array
// This is fragile but might work for a quick check if it's formatted as shown
const toursMatch = content.match(/export const tours = (\[[\s\S]*?\]) as Tour\[\];/);
if (toursMatch) {
  try {
    const toursStr = toursMatch[1];
    // Convert JSON-like string to a real array
    // We need to handle comments and trailing commas or type casts if they were there
    const tours = JSON.parse(toursStr.replace(/,\s*\]/, ']').replace(/,\s*\}/g, '}'));
    
    tours.forEach(tour => {
      if (!tour.image) {
        console.log(`Tour ${tour.id} (${tour.title}) is missing an image.`);
      } else if (tour.image === "") {
        console.log(`Tour ${tour.id} (${tour.title}) has an empty image string.`);
      }
      
      if (!tour.gallery || tour.gallery.length === 0) {
        console.log(`Tour ${tour.id} (${tour.title}) is missing a gallery.`);
      }
    });

  } catch (e) {
    console.error("Failed to parse tours string:", e.message);
  }
} else {
  console.log("Could not find tours array.");
}

const destinationsMatch = content.match(/export const destinations = (\[[\s\S]*?\]) as Destination\[\];/);
if (destinationsMatch) {
  try {
    const destStr = destinationsMatch[1];
    const dests = JSON.parse(destStr.replace(/,\s*\]/, ']').replace(/,\s*\}/g, '}'));
    dests.forEach(d => {
      if (!d.image) {
        console.log(`Destination ${d.id} (${d.name}) is missing an image.`);
      }
    });
  } catch (e) {
    console.error("Failed to parse destinations string:", e.message);
  }
}

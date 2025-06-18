const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Read the original HTML file
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Replace environment variables
const processedHtml = html.replace(
  /process\.env\.([A-Z_]+)/g,
  (match, key) => {
    const value = process.env[key];
    if (!value) {
      console.warn(`Warning: Environment variable ${key} is not set`);
      return '""';
    }
    return `"${value}"`;
  }
);

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Write the processed file
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), processedHtml);
console.log('Build completed successfully!'); 
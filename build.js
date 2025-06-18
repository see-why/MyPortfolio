const fs = require('fs');
const path = require('path');

// Add error handling for dotenv
try {
  require('dotenv').config({ path: '.env.local' });
  console.log('✅ dotenv loaded successfully');
} catch (error) {
  console.error('❌ Error loading dotenv:', error.message);
  process.exit(1);
}

// Function to replace environment variables in a file
function replaceEnvVars(content) {
  console.log('🔍 Looking for environment variables in content...');
  const matches = content.match(/process\.env\.([A-Z_]+)/g);
  if (matches) {
    console.log('📋 Found environment variables:', matches);
  } else {
    console.log('⚠️  No environment variables found in content');
  }

  return content.replace(
    /process\.env\.([A-Z_]+)/g,
    (match, key) => {
      const value = process.env[key];
      console.log(`🔧 Processing ${match} -> ${value ? 'SET' : 'NOT SET'}`);
      if (!value) {
        console.warn(`⚠️  Warning: Environment variable ${key} is not set`);
        return '""';
      }
      return `"${value}"`;
    }
  );
}

// Main build function with error handling
async function build() {
  try {
    console.log('🚀 Starting build process...');
    console.log('📁 Current directory:', __dirname);
    console.log('🔑 Available environment variables:', Object.keys(process.env).filter(key => key.startsWith('EMAILJS')));

    // Create dist directory if it doesn't exist
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist');
      console.log('✅ Created dist directory');
    } else {
      console.log('✅ dist directory already exists');
    }

    // Create js directory in dist if it doesn't exist
    if (!fs.existsSync('dist/js')) {
      fs.mkdirSync('dist/js', { recursive: true });
      console.log('✅ Created dist/js directory');
    } else {
      console.log('✅ dist/js directory already exists');
    }

    // Process js/main.js (where environment variables are used)
    const mainJsPath = path.join(__dirname, 'js', 'main.js');
    console.log('📂 Looking for main.js at:', mainJsPath);

    if (fs.existsSync(mainJsPath)) {
      console.log('✅ Found js/main.js');
      const mainJs = fs.readFileSync(mainJsPath, 'utf8');
      console.log('📄 Read js/main.js successfully');

      const processedMainJs = replaceEnvVars(mainJs);
      const destPath = path.join(__dirname, 'dist', 'js', 'main.js');
      fs.writeFileSync(destPath, processedMainJs);
      console.log('✅ Processed and wrote js/main.js to dist');
    } else {
      console.error('❌ Error: js/main.js not found at', mainJsPath);
      throw new Error('js/main.js not found');
    }

    // Copy other JavaScript files without processing
    const jsFiles = ['data.js', 'spa.js'];
    console.log('📋 Copying JavaScript files:', jsFiles);

    jsFiles.forEach(file => {
      const sourcePath = path.join(__dirname, 'js', file);
      const destPath = path.join(__dirname, 'dist', 'js', file);

      console.log(`📂 Checking ${file} at:`, sourcePath);

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Copied js/${file}`);
      } else {
        console.error(`❌ Error: js/${file} not found at`, sourcePath);
        throw new Error(`js/${file} not found`);
      }
    });

    // Copy index.html without processing (no env vars in HTML anymore)
    const htmlPath = path.join(__dirname, 'index.html');
    console.log('📂 Looking for index.html at:', htmlPath);

    if (fs.existsSync(htmlPath)) {
      fs.copyFileSync(htmlPath, path.join(__dirname, 'dist', 'index.html'));
      console.log('✅ Copied index.html');
    } else {
      console.error('❌ Error: index.html not found at', htmlPath);
      throw new Error('index.html not found');
    }

    // List all files in dist for verification
    console.log('📋 Files in dist directory:');
    const listFiles = (dir, prefix = '') => {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          console.log(`${prefix}📁 ${item}/`);
          listFiles(fullPath, prefix + '  ');
        } else {
          console.log(`${prefix}📄 ${item}`);
        }
      });
    };

    if (fs.existsSync('dist')) {
      listFiles('dist');
    }

    console.log('🎉 Build completed successfully!');
  } catch (error) {
    console.error('💥 Build failed with error:', error.message);
    console.error('📚 Stack trace:', error.stack);
    process.exit(1);
  }
}

// Run the build
build(); 
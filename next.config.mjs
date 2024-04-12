// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js

// next.config.mjs

// next.config.mjs

import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default {
  // Specify additional directories to be included in the build
  webpack(config) {
    // Get the directory name of the current file
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // Add the directory to the list of modules to resolve
    config.resolve.modules.push(__dirname);

    return config;
  },
};

  
  

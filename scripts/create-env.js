const fs = require('fs');

fs.writeFileSync('.env', `API-URL=${process.env.API_URL}\n`);
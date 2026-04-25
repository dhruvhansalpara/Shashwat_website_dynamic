import http from 'http';

function checkServer() {
  http.get('http://localhost:3000/api/health', (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('Health Check Response:', data);
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('Server check failed:', err.message);
    process.exit(1);
  });
}

checkServer();

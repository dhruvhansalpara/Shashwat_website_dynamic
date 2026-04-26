# PowerShell script to update database configuration
Write-Host "Updating database configuration in .env file..." -ForegroundColor Green

# Database configuration content
$content = @"
# Database Configuration
DB_HOST="auth-db1872.hstgr.io"
DB_USER="u961893888_sh_db_website"
DB_PASSWORD="K@rd@2026"
DB_NAME="u961893888_SH_db_250426"
DB_PORT="3306"

# API Keys (if needed)
GEMINI_API_KEY=""
"@

# Write to .env file
$content | Out-File -FilePath ".env" -Encoding UTF8

Write-Host "Database configuration updated successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "The .env file now contains:" -ForegroundColor Cyan
Write-Host "- DB_HOST: auth-db1872.hstgr.io" -ForegroundColor White
Write-Host "- DB_USER: u961893888_sh_db_website" -ForegroundColor White
Write-Host "- DB_PASSWORD: K@rd@2026" -ForegroundColor White
Write-Host "- DB_NAME: u961893888_SH_db_250426" -ForegroundColor White
Write-Host "- DB_PORT: 3306" -ForegroundColor White
Write-Host ""
Write-Host "You can now run the server with: npm run dev" -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to continue"
@echo off
echo Updating database configuration in .env file...

REM Create or update the .env file with correct database credentials
(
echo # Database Configuration
echo DB_HOST="auth-db1872.hstgr.io"
echo DB_USER="u961893888_sh_db_website"
echo DB_PASSWORD="K@rd@2026"
echo DB_NAME="u961893888_SH_db_250426"
echo DB_PORT="3306"
echo.
echo # API Keys ^(if needed^)
echo GEMINI_API_KEY=""
) > .env

echo Database configuration updated successfully!
echo.
echo The .env file now contains:
echo - DB_HOST: auth-db1872.hstgr.io
echo - DB_USER: u961893888_sh_db_website
echo - DB_PASSWORD: K@rd@2026
echo - DB_NAME: u961893888_SH_db_250426
echo - DB_PORT: 3306
echo.
echo You can now run the server with: npm run dev
echo.
pause
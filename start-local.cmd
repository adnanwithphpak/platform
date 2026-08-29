@echo off
title Guest Post Platform - Local Server
echo.
echo Guest Post Platform local server is starting...
echo Open this URL in your browser: http://127.0.0.1:8080
echo.
echo Keep this window open while viewing the website.
echo Press Ctrl+C to stop the server.
echo.
"C:\xampp\php\php.exe" -S 127.0.0.1:8080 -t "%~dp0"
pause

@echo off
title Red Frontier
cd /d "%~dp0"
set "GAME=%~dp0RedFrontier-Browser\index.html"
if not exist "%GAME%" (
  echo First run: unpacking the game...
  powershell -NoProfile -Command "Expand-Archive -Force '%~dp0RedFrontier-Browser.zip' '%~dp0'"
)
if not exist "%GAME%" (echo Could not find the game files. Keep this file next to RedFrontier-Browser.zip & pause & exit /b 1)
rem Open as a standalone app window (Microsoft Edge is built into Windows 10/11)
start "" msedge --app="file:///%GAME:\=/%" --start-maximized
if errorlevel 1 start "" "%GAME%"

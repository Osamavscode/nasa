@echo off
title Red Frontier - Installer
cd /d "%~dp0"
echo Joining 11 parts...
copy /b RedFrontier-Windows.zip.00.part+RedFrontier-Windows.zip.01.part+RedFrontier-Windows.zip.02.part+RedFrontier-Windows.zip.03.part+RedFrontier-Windows.zip.04.part+RedFrontier-Windows.zip.05.part+RedFrontier-Windows.zip.06.part+RedFrontier-Windows.zip.07.part+RedFrontier-Windows.zip.08.part+RedFrontier-Windows.zip.09.part+RedFrontier-Windows.zip.10.part RedFrontier-Windows.zip >nul
if errorlevel 1 (echo ERROR: a part is missing. Make sure all 11 .part files are in this folder. & pause & exit /b 1)
echo Checking file...
powershell -NoProfile -Command "if ((Get-FileHash 'RedFrontier-Windows.zip' -Algorithm SHA256).Hash -ne '12534da014b2d1d3660c2c3ed3ffc9ebc35022f90afe09e5384e1a73c6cc45dc'.ToUpper()) { exit 1 }"
if errorlevel 1 (echo ERROR: file check failed - a part is damaged. & pause & exit /b 1)
echo Extracting game (this takes a minute)...
powershell -NoProfile -Command "Expand-Archive -Force 'RedFrontier-Windows.zip' '.'"
if errorlevel 1 (echo ERROR: extraction failed. & pause & exit /b 1)
del RedFrontier-Windows.zip
echo Done! Starting Red Frontier...
start "" "RedFrontier-win32-x64\RedFrontier.exe"

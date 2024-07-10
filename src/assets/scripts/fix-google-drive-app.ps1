# Define the path to the batch file that launches Google Drive
$launchBatPath = "C:\Program Files\Google\Drive File Stream\launch.bat"

# Function to kill all Google Drive processes
function Stop-GoogleDrive {
    $processNames = @("GoogleDriveFS", "googledrivesync", "googledrive")

    foreach ($processName in $processNames) {
        Get-Process -Name $processName -ErrorAction SilentlyContinue | ForEach-Object {
            Write-Host "Stopping process: $($_.Name) (ID: $($_.Id))"
            Stop-Process -Id $_.Id -Force
        }
    }
}

# Function to start Google Drive using the batch file
function Start-GoogleDrive {
    if (Test-Path $launchBatPath) {
        Write-Host "Starting Google Drive using $launchBatPath..."
        try {
            Start-Process -FilePath $launchBatPath -ErrorAction Stop
            Write-Host "Google Drive started successfully."
        } catch {
            Write-Host "Failed to start Google Drive. Error: $_"
        }
    } else {
        Write-Host "Google Drive batch file not found at path: $launchBatPath"
    }
}

# Stop all Google Drive processes
Stop-GoogleDrive

# Wait for a moment to ensure all processes are closed
Start-Sleep -Seconds 5

# Start Google Drive
Start-GoogleDrive

Write-Host "Script execution completed."

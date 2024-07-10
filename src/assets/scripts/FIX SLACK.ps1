Add-Type -AssemblyName PresentationFramework

# Function to show a message box
function Show-MessageBox {
    param (
        [string]$message,
        [string]$title = "Message"
    )
    [System.Windows.MessageBox]::Show($message, $title)
}

# Function to close all Slack processes
function Close-SlackProcesses {
    $slackProcesses = Get-Process -Name "slack" -ErrorAction SilentlyContinue
    if ($slackProcesses) {
        $slackProcesses | ForEach-Object {
            try {
                Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
                Write-Host "Closed Slack process with ID: $($_.Id)"
            } catch {
                Write-Host "Failed to close Slack process with ID: $($_.Id)"
            }
        }
    } else {
        Write-Host "No Slack processes found."
    }
}

# Function to start Slack
function Start-Slack {
    $slackPath = "$env:LOCALAPPDATA\slack\slack.exe"
    if (Test-Path -Path $slackPath) {
        Start-Process -FilePath $slackPath
        Write-Host "Slack has been started."
    } else {
        Write-Host "Slack executable not found at $slackPath."
    }
}

# Close all Slack processes
Close-SlackProcesses

# Wait for a few seconds before restarting Slack
Start-Sleep -Seconds 5

# Start Slack
Start-Slack


# Wait for 2 seconds
Start-Sleep -Seconds 2

# Show the second message box
Show-MessageBox -message "Slack has been restarted and reopened." -title "iPartners I.T"


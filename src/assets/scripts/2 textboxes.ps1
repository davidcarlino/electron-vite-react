Add-Type -AssemblyName PresentationFramework

# Function to show a message box
function Show-MessageBox {
    param (
        [string]$message,
        [string]$title = "Message"
    )
    [System.Windows.MessageBox]::Show($message, $title)
}

# Show the first message box
Show-MessageBox -message "This is the first message box." -title "First Message"

# Wait for 2 seconds
Start-Sleep -Seconds 2

# Show the second message box
Show-MessageBox -message "This is the second message box." -title "Second Message"
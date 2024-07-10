$objShell = New-Object -ComObject Shell.Application 
 
$objFolder = $objShell.Namespace(0xA) 
 
write-Host "Removing Temp" -ForegroundColor Green  

Remove-Item “.\*\Appdata\Local\Temp\*” -Recurse -Force -ErrorAction SilentlyContinue  

Clear-DnsClientCache

write-Host "Cleanup task complete!" -ForegroundColor Yellow  
 
Sleep 3  


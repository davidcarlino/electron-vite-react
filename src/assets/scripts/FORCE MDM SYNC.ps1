$EnrollmentID = Get-ScheduledTask | Where-Object { $_.TaskPath -like "*EnterpriseMgmt\*" } | Select-Object -ExpandProperty TaskPath -Unique | Split-Path -Leaf

Start-Process -FilePath "C:\Windows\system32\deviceenroller.exe" -Wait -ArgumentList "/o $EnrollmentID[0] /c /b"
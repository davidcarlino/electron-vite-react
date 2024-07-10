$Alldevices = get-MgDeviceManagementManagedDevice -All

Foreach ($device in $Alldevices) {
    Sync-MgDeviceManagementManagedDevice -ManagedDeviceId $device.id
    write-host "Sending device sync request to" $device.DeviceName -ForegroundColor yellow
}
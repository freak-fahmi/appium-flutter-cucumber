class AndroidInfo {
    //Device 1
    static deviceName1() {
        return 'emulator-5554'; // pass the udid or devicename
    }
    static platFormVersion1() {
        return '12.0'; // pass the platform version
    }

    // Device 2
    static deviceName2() {
        return 'RR8N30AF1DH'; // pass the udid or devicename
    }
    static platFormVersion2() {
        return '12.0'; // pass the platform version
    }

    static appName() {
        return 'app-debug.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;

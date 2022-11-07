const find = require('appium-flutter-finder');

class LoginScreen {
    static btnLewatiSplashScreen = find.byValueKey('btnLewatisplashscreen');
    static btnDownloadSplashscreen = find.byValueKey('btnDownloadsplashscreen');
    static btnLewati = find.byValueKey('buttonLewati');
    static btnDaftarSekarang = find.byValueKey('ButtonDaftarSekarang');
    static btnMasuk = find.byValueKey('buttonMasukOnBoarding');
    static btnMasukLogin = find.byValueKey('btnMasukLogin');
    static txtUsername = find.byValueKey('usernameTextField');
    static txtPassword = find.byValueKey('passwordTextField');
    static btnOK = find.byValueKey('buttonOKallert');
    static btnLanjutHomedashboard = find.byValueKey('buttonLanjutDashboard');
    static btnLanjut2 = find.byValueKey('btnLanjut2');
    static btnMulai = find.byValueKey('btnMulai');
    static iconUbahMenuFav = find.byValueKey('ubahTextField');
}

module.exports = LoginScreen;
function authErrorMessageParser(errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi';
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';
    case 'auth/wrong-password':
      return 'Yanlış şifre';
    default:
      return 'Bir hata oluştu';
  }
}

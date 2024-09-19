import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import Buttons from '../../../components/Buttons';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    setLoading(true); // Kayıt süreci başlarken loading durumu aktif ediliyor
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate('Login');
      showMessage({
        message: 'Kayıt başarılı',
        type: 'success',
      });
    } catch (error) {
      let errorMessage = 'Bir hata oluştu';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Bu e-posta adresi zaten kullanımda';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Geçersiz e-posta adresi';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Şifre çok zayıf';
      }
      showMessage({
        message: errorMessage,
        type: 'danger',
      });
    } finally {
      setLoading(false); // İşlem tamamlandığında loading durumu pasif ediliyor
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: windowWidth * 0.3, color: 'black'}}>
          kayıt ol
        </Text>
        <View>
          <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <Input
                  placeholder="Email"
                  value={values.email}
                  onType={handleChange('email')}
                />
                <Input
                  placeholder="Password"
                  value={values.password}
                  onType={handleChange('password')}
                />
                <Input
                  placeholder="repassword"
                  value={values.repassword}
                  onType={handleChange('repassword')}
                />
                <Buttons
                  name="Kayıt Ol"
                  color="black"
                  number={0}
                  color_text="white"
                  onPress={handleSubmit}
                  loading={loading}
                />
              </>
            )}
          </Formik>
          <Buttons
            name="Geri"
            color="white"
            number={0.005}
            color_text="black"
            onPress={handleLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Sign;

const styles = StyleSheet.create({});

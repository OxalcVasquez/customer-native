import Toast from 'react-native-toast-message';

export const showToast = (message: string, type: 'success' | 'info' | 'error') => {

  let textInfo;
  switch (type) {
    case 'success':
      textInfo = 'Éxito';
      break;
    case 'info':
      textInfo = 'Info';
      break;
    case 'error':
      textInfo = 'Advertencia';
      break;
  }
   Toast.show({
    text1: textInfo,
    text2: message,
    type: type,
  });
};


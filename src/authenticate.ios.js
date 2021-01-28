import { NativeModules } from 'react-native';
import createError from './createError';

const { ReactNativeFingerprintScanner } = NativeModules;

export default ({ description = ' ', fallbackEnabled = true, allowNonBiometricMethods = false }) => {
  return new Promise((resolve, reject) => {
    ReactNativeFingerprintScanner.authenticate(description, fallbackEnabled, allowNonBiometricMethods, error => {
      if (error) {
        return reject(createError(error.code, error.message))
      }

      return resolve(true);
    });
  });
}

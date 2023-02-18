import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../utils/localStorage/localStorage';

class Token {
  public getToken(key: string): string | null {
    return getLocalStorage(key);
  }

  public setToken(key: string, token: string): void {
    setLocalStorage(key, token);
  }

  public clearToken() {
    removeLocalStorage(ACCESS_TOKEN_KEY);
  }
}

export default new Token();

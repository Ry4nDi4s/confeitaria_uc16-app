const LOCAL_STORAGE_TOKEN = "token";

/**
 * Salva ou recupera o token do usuário logado.
 */
const AuthRepository = {
  /**
   * Salva o token.
   * Token igual a null significa usuário não logado.
   * @param token
   */
  setToken(token: string | null) {
    if (token == null) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    } else {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
    }
  },

  /**
   * Recura o token.
   * Token igual a null significa usuário não logado.
   * @param token
   */
  getToken() {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN);
  },
};

export default AuthRepository;

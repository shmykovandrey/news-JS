import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '4a4bd05eb7a14e27ab00e1f80f63183e', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;

import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '4a4bd05eb7a14e27ab00e1f80f63183e', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;

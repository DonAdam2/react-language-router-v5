import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
//import meta image
import '@/public/assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//root component
import LangRouter from './js/routing/LangRouter';
//styles
import './scss/styles.scss';
//translations setup
import i18n from './i18n';

const container = document.getElementById('root'),
  root = createRoot(container);

root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <LangRouter />
    </I18nextProvider>
  </BrowserRouter>
);

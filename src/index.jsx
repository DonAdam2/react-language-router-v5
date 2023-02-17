import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import meta image
import '@/public/assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//root component
import LangRouter from './js/routing/LangRouter';
//styles
import './scss/styles.scss';
//translations
import { setTranslations, setDefaultLanguage } from 'react-switch-lang';
import en from '../public/translations/en';
import ar from '../public/translations/ar';

setTranslations({ en, ar });
setDefaultLanguage('en');

const container = document.getElementById('root'),
  root = createRoot(container);

root.render(
  <BrowserRouter>
    <LangRouter />
  </BrowserRouter>
);

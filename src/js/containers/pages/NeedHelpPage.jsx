import { translate } from 'react-switch-lang';

const NeedHelpPage = ({ t }) => {
  return <h1>{t('NeedHelp.title')}</h1>;
};

export default translate(NeedHelpPage);

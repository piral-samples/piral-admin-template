import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Site, RouterContextProvider } from 'tabler-react';
import { appName, copyYear, slogan } from '../constants';
import { useGlobalState } from 'piral';
import { InfoLinks } from './InfoLinks';

export const Layout: React.FC = ({ children }) => {
  const menuItems = useGlobalState(m => m.registry.menuItems);
  const user = useGlobalState(m => m.user);

  return (
    <Site.Wrapper
      headerProps={{
        href: '/',
        alt: appName,
        imageURL: require('../images/logo.png'),
        navItems: Object.keys(menuItems)
          .filter(m => menuItems[m].settings.type === 'header')
          .map(m => {
            const Component = menuItems[m].component;
            return <Component key={m} />;
          }),
        accountDropdown: {
          avatarURL: user.avatar,
          name: `${user.firstName} ${user.lastName}`,
          description: user.role,
          options: [
            { icon: 'user', value: 'Profile' },
            { icon: 'settings', value: 'Settings' },
            { isDivider: true },
            { icon: 'log-out', value: 'Sign out' },
          ],
        },
      }}
      routerContextComponentType={withRouter(RouterContextProvider)}
      navProps={{
        items: Object.keys(menuItems)
          .filter(m => menuItems[m].settings.type === 'general')
          .map(m => {
            const Component = menuItems[m].component;
            return <Component key={m} />;
          }),
      }}
      footerProps={{
        links: Object.keys(menuItems)
          .filter(m => menuItems[m].settings.type === 'footer')
          .map(m => {
            const Component = menuItems[m].component;
            return <Component key={m} />;
          }),
        note: slogan,
        copyright: (
          <>
            Copyright © {copyYear} <a href=".">{appName}</a>.
          </>
        ),
        nav: <InfoLinks />,
      }}>
      {children}
    </Site.Wrapper>
  );
};

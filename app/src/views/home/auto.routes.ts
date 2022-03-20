const { NODE_ENV } = process.env;
const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    redirectTo: '/demo?from=home',
    windowOptions: {
      title: 'App Home (redirect to demo)',
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
    },
    createConfig: {
      showSidebar: true,
      showCustomTitlebar: true,
      saveWindowBounds: true,
      openDevTools: NODE_ENV === 'development',
    },
  },
];

export default routes;

import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@lm/navbar-single",
  app: () => System.import("@lm/navbar-single"),
  activeWhen: ['/app'],
});

registerApplication({
  name: "@lm/app1",
  app: () =>
    System.import("@lm/app1"),
  activeWhen: (location) => location.pathname === '/app/one',
});

registerApplication({
  name: "@lm/app2",
  app: () =>
    System.import("@lm/app2"),
  activeWhen: (location) => location.pathname === '/app/two',
});

start({
  urlRerouteOnly: true,
});

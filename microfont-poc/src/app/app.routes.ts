import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Landing } from './layout/landing/landing';
import { AllComponentsPage } from './shared/common-components/test-component-page/all-components-page/all-components-page';
import { Register } from './feature/client-registration/register/register';
import { AllClient } from './feature/client-view/all-client/all-client';
import { AllAddress } from './feature/client-address/all-address/all-address';
import { AllAccounts } from './feature/client-account/all-account/all-accounts';


export const routes: Routes = [
  { path: '', redirectTo: 'landing/home', pathMatch: 'full' },
  // { path: 'login', component: Landing },
  {
    path: '',
    component: Layout,
    children: [{ path: 'mx/components', component: AllComponentsPage }],
  },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'client-register', component: Register },
      { path: 'mx/components', component: AllComponentsPage },
    ],
  },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'all-address', component: AllAddress },
      { path: 'mx/components', component: AllComponentsPage },
    ],
  },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'all-clients', component: AllClient },
      { path: 'mx/components', component: AllComponentsPage },
    ],
  },
  {
    path:'',
    component: Layout,
    children:[
      {path:'all-accounts', component: AllAccounts},
      {path:'mx/components', component: AllComponentsPage},
    ]
  },
  {
    path: 'landing',
    component: Layout,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/landing.routing').then((m) => m.landingRouting),
      },
    ],
  },
  {
    path: '',
    component: Layout,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./layout/landing.routing').then((m) => m.landingRouting),
      },
      {
        path: 'poc',
        loadChildren: () =>
          import('./shared/features/approval/poc.routing').then(
            (m) => m.PocRouting,
          ),
      },
      // { path: 'gl', loadChildren: () => import('./modules/finbook/finbook-routing').then(m => m.FinBookRouting) },
    ],
  },
  { path: '', redirectTo: 'usernote', pathMatch: 'full' },
  {
    path: 'poc',
    component: Layout,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./shared/features/approval/poc.routing').then(
            (m) => m.PocRouting,
          ),
      },
    ],
  },
  {
    path: 'feature',
    component: Layout,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./shared/features/feature.routing').then(
            (m) => m.featureRoutes,
          ),
      },
    ],
  },
  {
    path: 'rpt',
    component: Layout,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./shared/features/report/report.routing').then(
            (m) => m.reportRoutes,
          ),
      },
    ],
  },
];

// { path: 'dashboard', loadChildren: () => import('./modules/landing/landing.routing').then(m => m.landingRouting) },

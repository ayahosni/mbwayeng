import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
    { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
    { path: 'gallery', loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent) },
    { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
    { path: '**', redirectTo: '' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

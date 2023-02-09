import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'add-animais',
    loadChildren: () => import('./add-animais/add-animais.module').then( m => m.AddAnimaisPageModule)
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then( m => m.AnimaisPageModule)
  },
  {
    path: 'mostrar-animais',
    loadChildren: () => import('./mostrar-animais/mostrar-animais.module').then( m => m.MostrarAnimaisPageModule)
  },
  {
    path: 'mostrar-animais/:idanimal/:nome/:data_nascimento/:sexo/:raca/:especie/:tipo_exploracao/:local_de_nascimento/:categoria/:anomalia/:quilos_do_nascimento/:numero_brinco',
    loadChildren: () => import('./mostrar-animais/mostrar-animais.module').then( m => m.MostrarAnimaisPageModule)
  },
  {
    path: 'add-animais/:idanimal/:nome/:data_nascimento/:sexo/:raca/:especie/:tipo_exploracao/:local_de_nascimento/:categoria/:anomalia/:quilos_do_nascimento/:numero_brinco',
    loadChildren: () => import('./add-animais/add-animais.module').then( m => m.AddAnimaisPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

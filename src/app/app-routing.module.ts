import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
    { path: 'accordion', loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule) },
    { path: 'tooltip', loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule) },
    { path: 'datepicker', loadChildren: () => import('./datepicker/datepicker.module').then(m => m.DatepickerModule) },
    { path: 'dropdown', loadChildren: () => import('./dropdown/dropdown.module').then(m => m.DropdownModule) },
    { path: 'getting-started', loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedModule) },
    { path: 'modal', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule) },
    { path: '**', redirectTo: 'getting-started' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

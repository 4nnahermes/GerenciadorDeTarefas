import { Routes } from '@angular/router';
import { TabelaTarefas } from './tabela-tarefas/tabela-tarefas';
import { TabelaMoradores } from './tabela-moradores/tabela-moradores';
import { FormTarefas } from './form-tarefas/form-tarefas';
import { FormMoradores } from './form-moradores/form-moradores';
import { ListCardTarefas } from './list-card-tarefas/list-card-tarefas';
import { PageNotFound } from './page-not-found/page-not-found';
import { Login } from './login/login';

export const routes: Routes = [
    { path: 'tabela-tarefas', component: TabelaTarefas },
    { path: 'editar-tarefa/:id', component: FormTarefas },
    { path: 'formulario-tarefas', component: FormTarefas },
    { path: 'list-card-tarefas', component: ListCardTarefas },
    { path: 'tabela-moradores', component: TabelaMoradores },
    { path: 'editar-morador/:id', component: FormMoradores },
    { path: 'formulario-moradores', component: FormMoradores },
    { path: 'login', component: Login },
    { path: '', redirectTo: '/tabela-tarefas', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];

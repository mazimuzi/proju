import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserformComponent } from './userform/userform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

export const routes: Routes = [
    { path: 'hello', component: HelloWorldComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'userform', component: UserformComponent },
    { path: 'reactiveform', component: ReactiveformComponent },
    { path: '', redirectTo: '/hello', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

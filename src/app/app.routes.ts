import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { AllCourse } from './all-course/all-course';
import { Pages } from './pages/pages';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'blog',component:Blog},
    {path:'contact',component:Contact},
    {path:'all-course', component:AllCourse},
    {path:'pages',component:Pages}
];

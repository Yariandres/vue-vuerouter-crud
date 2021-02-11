import Home from './components/home/Home.vue';
import Event from './components/event/Event.vue';
import Office from './components/office/Office.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/event/:eventId', component: Event },
    { path: '/office', name: 'Office', component: Office, props: true }
];
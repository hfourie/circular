import { HomeContentOption } from '../view-models/home-content-options';

export let homeContentOptions: Array<HomeContentOption> = [
    {
        option: 'Games',
        icon: 'glyphicon-play',
        route: 'authenticated/dashboard'
    },
    {
        option: 'Voice Chat',
        icon: 'glyphicon-volume-up',
        route: 'authenticated/dashboard'
    },
    {
        option: 'Chat',
        icon: 'glyphicon-comment',
        route: 'authenticated/dashboard'
    },
    {
        option: 'Media',
        icon: 'glyphicon-music',
        route: 'authenticated/multimedia'
    },
    {
        option: 'Settings',
        icon: 'glyphicon-cog',
        route: 'authenticated/dashboard'
    }
];
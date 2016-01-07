import {Page, NavController} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';

@Page({
    templateUrl: 'build/pages/list-page/list-page.html'
})
export class HelloIonicPage {
    constructor(nav:NavController) {
        this.nav = nav;
    }

    items = [
        {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }, {
            title: 'Game of Thrones',
            author: 'George R. R. Martin',
            release: 2011,
            thumbnail: 'http://cdn.warer.com/media/Game-of-Thrones-seven-kingdoms.png'
        }, {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }, {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }, {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }, {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }, {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }, {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }, {
            title: 'Walking Dead',
            author: 'Sam Pin',
            release: 2009,
            thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
        }];

    viewDetails(item) {
        this.nav.push(ItemDetailsPage, {
            id: item.title
        });
    }
}

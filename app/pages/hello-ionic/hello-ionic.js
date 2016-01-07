import {Page, NavController} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
    constructor(nav:NavController) {
        this.nav = nav;
    }

    items = [{
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
    },]

    showMore() {
        this.nav.push(ItemDetailsPage);
        console.log('Show more');
    }
}

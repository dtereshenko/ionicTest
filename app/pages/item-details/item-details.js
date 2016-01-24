import {IonicApp, Page, Alert, NavController, NavParams} from 'ionic/ionic';
import {SeriesDetailsService} from './series.detail.service';
import {NgClass} from 'angular2/common';

@Page({
    templateUrl: 'build/pages/item-details/item-details.html',
    directives: [NgClass]
})
export class ItemDetailsPage {
    constructor(nav:NavController, navParams:NavParams, seriesDetailService: SeriesDetailsService) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItemId = navParams.get('id');
        this.seriesDetailService = seriesDetailService;
        this.seriesDetailService.getDetail(this.selectedItemId).then((item) => {
            this.item = item;
            console.log('Detailed data received.');
        });
    }

    ToggleSubscribe (item) {
        item.subscribed = !item.subscribed;
        let subscribeAlert = Alert.create({
            title: item.subscribed ? 'Thanks!' : 'Attention!',
            subTitle: item.subscribed ? `You have succesfully subscribed to "${item.title}" TV series.` : `You have unsubscribed from "${item.title}". You will no longer receive push notifications about new episodes.`,
            buttons: ['Ok']
        });

        this.nav.present(subscribeAlert)
    }

    ToggleEpisode (season, episode) {
        this.item.watched[season][episode] = !this.item.watched[season][episode];
    }
}

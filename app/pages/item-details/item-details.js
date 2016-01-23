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

    subscribe() {
        Alert.create({
            title: 'Thanks!',
            subTitle: 'You have succesfully subscribed to "Walkind dead" TV series.'
        });
    }

    toggleEpisode (season, episode) {
        this.item.watched[season][episode] = !this.item.watched[season][episode];

        console.log('Test clicked');
    }
}

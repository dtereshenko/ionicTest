import {IonicApp, Page, Alert, NavController, NavParams} from 'ionic/ionic';
import {SeriesDetailsService} from './series.detail.service';

@Page({
    templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
    constructor(nav:NavController, navParams:NavParams, seriesDetailService: SeriesDetailsService) {
        this.nav = nav;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItemId = navParams.get('id');
        this.seriesDetailService = seriesDetailService;
        this.item = this.seriesDetailService.getDetail(this.selectedItemId);
    }


    subscribe() {
        Alert.create({
            title: 'Thanks!',
            subTitle: 'You have succesfully subscribed to "Walkind dead" TV series.'
        });
    }
}

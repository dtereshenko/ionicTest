import {Page, NavController} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';
import {SeriesService} from './series.service';


@Page({
    templateUrl: 'build/pages/list-page/list-page.html'
})
export class HelloIonicPage {
    constructor(nav:NavController, seriesService: SeriesService) {
        this.nav = nav;
        this.seriesService = seriesService;
        this.items = this.seriesService.getSeries();
    }

    viewDetails(item) {
        this.nav.push(ItemDetailsPage, {
            id: item.title
        });
    }
}

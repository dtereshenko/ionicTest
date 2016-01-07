import {IonicApp, Page, Alert, NavController, NavParams} from 'ionic/ionic';

@Page({
    templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
    constructor(nav:NavController, navParams:NavParams) {
        this.nav = nav;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItemId = navParams.get('id');

        this.items = {
            'Walking Dead': {
                title: 'Walking Dead',
                description: `Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the weeks
            and months
            following a zombie apocalypse. Led by police officer Rick Grimes, his family and a group of other
            survivors find
            themselves constantly on the move in search of a safe and secure home. Bu…`,
                author: 'Sam Pin',
                release: 2009,
                thumbnail: 'http://orig07.deviantart.net/84fa/f/2013/346/8/5/the_walking_dead__season_two___icon_by_blagoicons-d6xp5km.png'
            },
            'Game of Thrones': {
                title: 'Game of Thrones',
                description: `George R.R. Martin's best-selling book series "A Song of Ice and Fire" is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing a d…`,
                author: 'George R. R. Martin',
                release: 2011,
                thumbnail: 'http://cdn.warer.com/media/Game-of-Thrones-seven-kingdoms.png'
            }
        };


        this.item = this.items[this.selectedItemId];
    }


    subscribe() {
        Alert.create({
            title: 'Thanks!',
            subTitle: 'You have succesfully subscribed to "Walkind dead" TV series.'
        });
    }
}

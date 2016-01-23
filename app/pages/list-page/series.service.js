import {Injectable} from 'angular2/core';

@Injectable()
export class SeriesService {
    getSeries () {
        return [
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
                title: 'American Horror Story',
                author: 'Brad Falchuk, Ryan Murphy',
                release: 2011,
                thumbnail: 'http://www.kerryherta.com/_Media/ahsh_poster_mattresskeyface_hr.jpeg'
            }, {
                title: 'Sherlock',
                author: 'Mark Gatiss, Steven Moffat',
                release: 2010,
                thumbnail: 'https://www.hit2k.com/wp-content/uploads/2015/07/the_testament_of_sherlock_holmes_Hit2k.png'
            }, {
                title: 'The Big Bang Theory',
                author: 'Chuck Lorre, Bill Prady',
                release: 2007,
                thumbnail: 'http://orig01.deviantart.net/0eeb/f/2014/095/d/7/the_big_bang_theory_folder_icon_by_andreas86-d6pff2g.png'
            }, {
                title: 'Fargo',
                author: 'Jack Withness',
                release: 2014,
                thumbnail: 'https://pmcdeadline2.files.wordpress.com/2015/10/fargo-season-2.jpg?w=446&h=299&crop=1'
            }, {
                title: 'Supernatural',
                author: 'Eric Kripke',
                release: 2005,
                thumbnail: 'http://orig12.deviantart.net/546f/f/2014/343/0/b/supernatural___v8_by_rest_in_torment-d89a0vr.png'
            }, {
                title: 'Gray\'s Anatomy',
                author: 'Shonda Rhimes',
                release: 2005,
                thumbnail: 'http://www.veryicon.com/icon/png/Movie%20%26%20TV/TV%20Shows/Greys%20Anatomy.png'
            }
        ];
    }
}
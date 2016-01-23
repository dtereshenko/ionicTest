import {Injectable} from 'angular2/core';
import {DETAILS} from './series.detail.mock';

@Injectable()
export class SeriesDetailsService {
    getDetail (seriesId) {
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(DETAILS[seriesId]), 0);
        });

        return promise;
    }
}
import {Injectable} from 'angular2/core';
import {DETAILS} from './series.detail.mock';

@Injectable()
export class SeriesDetailsService {
    getDetail (seriesId) {
        return DETAILS[seriesId];
    }
}
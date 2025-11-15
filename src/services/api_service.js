import {ChallengerService} from './index';

export class Api {
    constructor(request) {
        this.request = request;
        this.globalfeed = new GlobalFeedPage(page);
        this.challenger = new ChallengerService(request);
    }
}
import StatsTracker from './stats-tracker';
import { test } from './test';

const tracker = StatsTracker.getInstance();

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;

console.log(`WidgetViews: ${tracker.widgetViews}`);
console.log(`Button Clicks: ${tracker.buttonClicks}`);
console.log(`Facebook Shares: ${tracker.facebookShares}`);
console.log(`Twitter Shares: ${tracker.twitterShares}`);

tracker.widgetViews++;
tracker.twitterShares += 2;

test();

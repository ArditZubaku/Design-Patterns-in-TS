import StatsTracker from './stats-tracker';

export function test() {
  const tracker = StatsTracker.getInstance();
  console.log(`WidgetViews: ${tracker.widgetViews}`);
  console.log(`Button Clicks: ${tracker.buttonClicks}`);
}

export default class StatsTracker {
  public buttonClicks: number = 0;
  public facebookShares: number = 0;
  public twitterShares: number = 0;
  public widgetViews: number = 0;

  private constructor() {
    if (StatsTracker.instance) {
      throw new Error('Cannot initialize singleton class using new');
    }

    StatsTracker.instance = this;
  }

  private static instance: StatsTracker = new StatsTracker();

  public static getInstance(): StatsTracker {
    return StatsTracker.instance;
  }
}

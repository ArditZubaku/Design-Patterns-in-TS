import { NewsFeed } from './news-feed';
import { JSONExportService, MockPostsService } from './services';

const mockService = new MockPostsService();
mockService.export(new JSONExportService()).then(result => console.log(result));
const newsFeed = new NewsFeed(mockService);
newsFeed.show();

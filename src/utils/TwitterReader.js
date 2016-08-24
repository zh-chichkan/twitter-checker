import Twitter from 'twitter';
import { RESULT_TYPE, TWEETS_COUNT, INCLUDE_ENTITIES } from '../constants/AppSonstants.js';

const client = new Twitter({
  consumer_key: '1MF2PwmGMrU6BExdwQoR8BG1m',
  consumer_secret: 'FAbhXR9iXV6eBaxMmoXgXIXXkWBihiVc8qlZNBSxY4hwEiHQVZ',
  access_token_key: '768433969184509952-FstoUcXtfQIndhzQ36ia2UAmHRJYa2o',
  access_token_secret: 'SJLVptAWhECdaD2dEoMGRbJp456PF1yOf5Vml1lKdrUk8'
});

export default function getTweets (q) {
  let cfg = {
    q: q,
    result_type: RESULT_TYPE,
    count: TWEETS_COUNT,
    include_entities: INCLUDE_ENTITIES
  };

  return new Promise((resolve, reject) => {
    client.get('search/tweets', cfg, (error, tweets, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(tweets);
      }
    })
  });
}

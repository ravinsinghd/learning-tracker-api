import { trackerModel } from './database/model/tracker.model';

export const getCountStat = () => {
  return trackerModel.aggregate([
    {
      $group: {
        _id: {
          category: '$category',
          status: '$status',
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $group: {
        _id: '$_id.category',
        statusCount: {
          $addToSet: {
            status: '$_id.status',
            count: '$count',
          },
        },
      },
    },
  ]);
};

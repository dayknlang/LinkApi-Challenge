const database = 'config';
use(database);

// Insert a few documents into the sales collection.
db.order.createBusinessOrder([
  { _id: 0, title: "Alexia", status: "new", won_time: '10: 55', integration: "true"
  },
  { _id: 1, title: "Alexia", status: "urgent", won_time: '11: 00', integration: "true"
  },
  { _id: 2, title: "Alexia", status: "urgent", won_time: '11: 01', integration: "true"
  },
  { _id: 3, title: "Iron rod", status: "new", won_time: '12: 00', integration: "false"
  },
  { _id: 4, title: "Iron rod", status: "urgent", won_time: '12: 01', integration: "false"
  },
  { _id: 5, title: "Iron rod", status: "urgent", won_time: '12: 03', integration: "false"
  },
]);

// Run a find command to view items sold on November 15th, 2021.
db.order.find({ date: { $gte: new Date('2020-11-15'), $lt: new Date('2021-11-16') } });

// Build an aggregation to view total sales for each product category.
const aggregation = [
  { $match: { date: { $gte: new Date('2020-01-01'), $lt: new Date('2021-12-31') } } },
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity'
          ]
        }
      }
    }
  }
];


db.order.aggregate(aggregation);
type Quote = {
  id: string;
  request_id: string;
  price_ceiling: number;
  price_floor: number;
  serial_id: string;
  comment: string;
  responding_member_id: string;
  responding_member_name: string;
};

export async function getQuotes(): Promise<Array<Quote>> {
  return [
    {
      id: "123xyz",
      price_floor: 120,
      price_ceiling: 150,
    },
    {
      id: "124xyz",
      price_floor: 600,
    },
  ];
}

import { json } from "@remix-run/node";
import { Link,useLoaderData } from "@remix-run/react";

import { getQuotes } from "~/models/quote.server";


type LoaderData = {
    quotes: Awaited<ReturnType<typeof getQuotes>>;
};

export const loader = async () => {
    return json<LoaderData>({
      quotes: await getQuotes(),
    });
};

export default function Quotes() {
  const { quotes } = useLoaderData() as LoaderData;

  console.log(quotes);
  return (
    <main>
        <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <Link
              to={quote.id}
              className="text-blue-600 underline"
            >
              {quote.price_floor}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
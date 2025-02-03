export interface PythPriceFeed {
  id: string;
  attributes: {
    asset_type: string;
    base: string;
    description: string;
    display_symbol: string;
    generic_symbol: string;
    quote_currency: string;
    schedule: string;
    symbol: string;
  };
}

export type PythMetadata = PythPriceFeed[];

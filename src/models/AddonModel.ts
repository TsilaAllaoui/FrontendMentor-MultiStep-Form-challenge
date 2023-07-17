interface AddonModel {
  name: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

interface UserAddon {
  name: string;
  desc: string;
  price: number;
  type: string;
}

export type { AddonModel, UserAddon };

interface PlanModel {
  icon: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

interface UserPlan {
  name: string;
  price: number;
  type: string;
}

export type { PlanModel, UserPlan };

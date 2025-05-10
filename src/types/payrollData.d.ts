// src/types/payrollData.d.ts
declare module "*/data/payrollData.json" {
  interface PayrollData {
    hero: {
      title: string;
      description: string;
    };
    services: Array<{
      title: string;
      description: string;
      features: string[];
      icon: string;
    }>;
    peoBenefits: {
      title: string;
      description: string;
      benefits: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
    };
    consulting: {
      title: string;
      description: string;
      features: Array<{
        title: string;
        description: string;
      }>;
    };
    employeeServices: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  }

  const value: PayrollData;
  export default value;
}
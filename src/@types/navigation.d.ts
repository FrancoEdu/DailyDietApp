export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: undefined;
      creation: {
        mealId?: string;
      };
      feedback: {
        onDiet: boolean;
      };
      meal: {
        mealId: string;
      };
    }
  }
}
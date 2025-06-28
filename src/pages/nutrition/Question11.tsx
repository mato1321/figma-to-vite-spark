
import NutritionQuestion from "@/components/NutritionQuestion";

const Question11 = () => {
  return (
    <NutritionQuestion
      questionNumber={11}
      question="記性變差了嗎?您希望改善您的短期記憶嗎"
      options={["是", "否"]}
      currentRoute="/nutrition/question/11"
      nextRoute="/nutrition/question/12"
      previousRoute="/nutrition/question/10"
    />
  );
};

export default Question11;

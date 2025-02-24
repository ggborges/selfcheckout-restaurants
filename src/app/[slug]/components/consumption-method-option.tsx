import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ConsumptionMethodOptionProps {
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
}
const ConsumptionMethodOption = ({
  imageUrl,
  imageAlt,
  buttonText,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <Image src={imageUrl} width={78} height={80} alt={imageAlt} />
        <Button variant="secondary" className="rounded-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;

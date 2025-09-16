"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export default function QuantitySelector({ quantity, setQuantity }: QuantitySelectorProps) {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(1, quantity - 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === '') {
      // Allow clearing the input, but treat it as 1 conceptually
    }
  };

  return (
    <div className="flex items-center">
      <Button variant="outline" size="icon" onClick={decrement} className="h-10 w-10 rounded-r-none">
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="h-10 w-16 text-center rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        min="1"
      />
      <Button variant="outline" size="icon" onClick={increment} className="h-10 w-10 rounded-l-none">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}

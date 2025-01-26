import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { Steps } from '@/types/Steps';
import User from '../Dialog/User';
import StepAddress from '../Dialog/Address';
import { Product } from '@/types/Product';
import { FinalyProduct } from './FinalyProduct';

const StepTitle: Record<Steps, string> = {
  'user': 'Dados Pessoais',
  'address': 'Endereço de Entrega',
  'finish': 'Finalizando Pedido',
};

type CheckDialogProps = {
  product?: Product | null; // Garantir que o produto pode ser null
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ChecktProduct({ open, onOpenChange, product }: CheckDialogProps) {
  const [step, setStep] = useState<Steps>('user');
  const stepNumber = Object.keys(StepTitle).indexOf(step) + 1;
  const progressPercent = (stepNumber / Object.keys(StepTitle).length) * 100;

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black opacity-50" />
        <DialogContent className="bg-white p-6 rounded-md shadow-xl w-full max-w-lg mx-auto">
          <DialogHeader>
            <DialogTitle>{StepTitle[step]}</DialogTitle>
          </DialogHeader>

          <Progress value={progressPercent} className="my-4" />

          <div className="flex flex-col gap-3">
            {step === 'user' ? (
              <User setStep={setStep} />
            ) : step === 'address' ? (
              <StepAddress setStep={setStep} />
            ) : (
              <FinalyProduct product={product} />
            )}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

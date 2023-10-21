import React, {useMemo} from 'react';
import {Step} from '../../../../../../interface/route.interface';
import {ModeEnum} from '../../../../../../enums';
import {BusMode, TaxiMode, WalkMode} from './components';

interface StepComponentProps {
  step: Step;
}

const StepComponent: React.FC<StepComponentProps> = ({step}) => {
  const renderStep = useMemo(() => {
    switch (step.mode) {
      case ModeEnum.BUS: {
        return <BusMode />;
      }
      case ModeEnum.TAXI: {
        return <TaxiMode />;
      }
      case ModeEnum.WALK: {
        return <WalkMode />;
      }
    }
  }, [step]);

  return renderStep;
};

export default StepComponent;

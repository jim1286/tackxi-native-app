import React, {useMemo} from 'react';
import {Step} from '../../../../../../interface/route.interface';
import {ModeEnum} from '../../../../../../enums';
import {BusMode, TaxiMode, WalkMode} from './components';

interface StepComponentProps {
  step: Step;
  wastedTime: number;
}

const StepComponent: React.FC<StepComponentProps> = ({step, wastedTime}) => {
  const renderStep = useMemo(() => {
    const percent =
      Math.floor((step.sectionTime / wastedTime) * 100) < 15
        ? 15
        : Math.floor((step.sectionTime / wastedTime) * 100);

    switch (step.mode) {
      case ModeEnum.BUS: {
        return <BusMode percent={70} sectionTime={step.sectionTime} />;
      }
      case ModeEnum.TAXI: {
        return <TaxiMode percent={percent} sectionTime={step.sectionTime} />;
      }
      case ModeEnum.WALK: {
        return <WalkMode percent={percent} sectionTime={step.sectionTime} />;
      }
    }
  }, [step, wastedTime]);

  return renderStep;
};

export default StepComponent;

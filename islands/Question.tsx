import { useSignal } from '@preact/signals';
import IconChevronDown from '@tabler_icons/tsx/chevron-down.tsx';
import IconChevronUp from '@tabler_icons/tsx/chevron-up.tsx';

interface QuestionProps {
  question: string;
  answer: string;
}
const Question = ({ question, answer }: QuestionProps) => {
  const collapsed = useSignal(true);
  return (
    <div class='ud-single-faq wow fadeInUp' data-wow-delay='.1s'>
      <div class='accordion z-10'>
        <button
          class='ud-faq-btn collapsed'
          onClick={() => (collapsed.value = !collapsed.value)}
        >
          <span class='icon flex-shrink-0'>
            {collapsed ? (
              <IconChevronDown class='w-8 h-8' />
            ) : (
              <IconChevronUp class='w-8 h-8' />
            )}
          </span>
          <span>{question}</span>
        </button>
        <div
          class={`accordion-collapse collapse ease-in-out duration-200 ${
            collapsed.value ? 'hidden' : ''
          }`}
        >
          <div class={`ud-faq-body z-50 ${collapsed.value ? '' : 'visible'}`}>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

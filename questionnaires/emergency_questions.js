const emergency_qs = [
  {
    id: 'ER_1',
    question: 'Can you answer a few, quick questions about the anxiety you are experiencing?',
    answerType: 'bool',
    answer: null,
    complete: false
  },
  {
    id: 'ER_2',
    question: 'What is the location where are you experiencing anxiety right now?',
    answerType: 'multi',
    answer: '',
    answerOptions: [ 'Home', 'Work', 'Public', 'Other' ],
    complete: false
  },
  {
    id: 'ER_3',
    question: 'What specific aspects, of your environment, triggered your anxiety? ',
    answerType: 'string',
    answer: '',
    complete: false
  },
  {
    id: 'ER_4',
    question: 'Are you afraid of being judged?',
    answerType: 'bool',
    answer: null,
    complete: false
  },
  {
    id: 'ER_5',
    question: 'Can you accept that your fear of being judged is irrational?',
    answerType: 'bool',
    answer: null,
    complete: false
  },
  {
    id: 'ER_6',
    question: 'Think of three different words that describe how you feel, right now?',
    answerType: 'array',
    answer: [],
    complete: false
  },
  {
    id: 'ER_7',
    question: 'Thanks for completing this questionnaire! The results will be helpful in conquering your anxiety!',
    answerType: 'completion',
    answer: null,
    complete: false
  }
];

export default emergency_qs;
